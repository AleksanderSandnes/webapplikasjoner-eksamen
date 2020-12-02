import mongoose from 'mongoose';

const { Schema } = mongoose;

const ImageSchema = new Schema(
  {
    file_path: {
      type: String,
      required: true,
    },
    file_mimetype: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Image', ImageSchema);
