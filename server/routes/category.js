import express from 'express';

import { categoryController } from '../controllers/index.js';

const router = express.Router();

router.get('/', categoryController.list);
router.get('/:id', categoryController.get);
router.post('/', categoryController.create);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.remove);

export default router;
