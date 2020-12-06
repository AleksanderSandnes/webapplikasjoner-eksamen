import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

CategorySchema.virtual('articles', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'categoryId',
  justOne: false,
});

export default mongoose.model('Category', CategorySchema);
