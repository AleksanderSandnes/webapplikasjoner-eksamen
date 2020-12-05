import express from 'express';

import { supportEmailController } from '../controllers/index.js';

const router = express.Router();

router.get('/', supportEmailController.list);
router.get('/:id', supportEmailController.get);
router.post('/', supportEmailController.create);
router.delete('/:id', supportEmailController.remove);

export default router;
