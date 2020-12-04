import express from 'express';

import { locationController } from '../controllers/index.js';

const router = express.Router();

router.get('/', locationController.list);
router.get('/:id', locationController.get);
router.post('/', locationController.create);
router.put('/:id', locationController.update);
router.delete('/:id', locationController.remove);

export default router;
