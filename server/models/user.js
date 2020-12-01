import mongoose from 'mongoose';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Fyll ut epost'],
      unique: true, // unique index and value
      match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Eposten er ikke gyldig'],
    },
    password: {
      type: String,
      required: [true, 'Fyll ut passord'],
      minlength: [4, 'Passordet må minmum bestå av 4 verdier'],
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin', 'superadmin'],
        message: 'Rolle ikke fylt ut',
      },
      default: 'user',
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
});

UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

UserSchema.methods.comparePassword = async function (password) {
  console.log(password);
  const result = argon2.verify(this.password, password);
  return result;
};

const User = mongoose.model('User', UserSchema);

export default User;
