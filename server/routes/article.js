import express from 'express';
import { articleController } from '../controllers/index.js';
import { editArticleSchema, newArticleSchema } from '../schemas/article.js';
import { validateFields } from '../middleware/validate.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.js';

const router = express.Router();

router.get('/', articleController.list);
router.get('/:id', articleController.get);
router.post(
  '/',
  [isAuthenticated, isAuthorized('admin', 'superadmin')],
  articleController.create
);
router.post('/articles/:id/edit', validateFields(editArticleSchema));
router.post('/newarticle', validateFields(newArticleSchema));
router.put('/:id', articleController.update);
router.delete('/:id', articleController.remove);
router.get('/totalviews', articleController.totalArticleViews);

export default router;
