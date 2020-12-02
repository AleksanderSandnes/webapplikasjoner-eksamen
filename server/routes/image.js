import express from 'express';
import { imageController } from '../controllers/index.js';
import { upload } from '../middleware/image.js';

const router = express.Router();

router.post('/upload', upload, imageController.create);

export default router;
