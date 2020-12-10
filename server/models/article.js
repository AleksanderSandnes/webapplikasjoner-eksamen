import mongoose from 'mongoose';

const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    leadParagraph: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: true,
    },
    adminId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    image: {
      type: mongoose.Schema.ObjectId,
      ref: 'Image',
    },
    isClassified: {
      type: Boolean,
      default: false,
    },
    author: {
      type: String,
      enum: {
        values: ['Lars Larsen', 'Gunn Gundersen', 'Simen Simensen'],
        message: 'Forfatter ikke fylt ut',
        required: true,
      },
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ArticleSchema.index({
  title: 'text',
  categoryId: 'text',
});

export default mongoose.model('Article', ArticleSchema);
