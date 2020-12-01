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
      type: String,
      required: true,
    },
    adminId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    author: {
      type: String,
      enum: {
        values: ['Lars Larsen', 'Gunn Gundersen', 'Simen Simensen'],
        message: 'Forfatter ikke fylt ut',
      },
    },
  },

  { timestamps: true }
);

export default mongoose.model('Article', ArticleSchema);
