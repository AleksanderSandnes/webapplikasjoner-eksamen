import mongoose from 'mongoose';

const { Schema } = mongoose;

const LocationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      default: '69 99 00 00',
    },
    offices: [
      {
        name: String,
        address: String,
        email: String,
        employees: [
          {
            name: String,
            position: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

LocationSchema.index({
  name: 'text',
});

export default mongoose.model('Location', LocationSchema);
