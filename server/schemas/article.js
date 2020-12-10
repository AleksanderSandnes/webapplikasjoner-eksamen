import Joi from 'joi';

const ArticleValues = {
  title: Joi.string().min(1).required().messages({
    'any.required': 'Tittel må fylles ut',
    'string.empty': 'Fyll ut tittel',
  }),
  ingress: Joi.string().min(50).required().messages({
    'any.required': 'Ingress må fylles ut',
    'string.empty': 'Fyll ut ingress',
  }),
  content: Joi.string().min(50).required().messages({
    'any.required': 'Innhold må fylles ut',
    'string.empty': 'Fyll ut innhold',
  }),
  category: Joi.string().min(1).required().messages({
    'any.required': 'Kategori må fylles ut',
    'string.empty': 'Fyll ut kategori',
  }),
  author: Joi.string().min(1).required().messages({
    'any.required': 'Forfatter må fylles ut',
    'string.empty': 'Fyll ut forfatter',
  }),
};

export const editArticleSchema = Joi.object()
  .keys({
    ...ArticleValues,
  })
  .options({ abortEarly: false });

export const newArticleSchema = Joi.object()
  .keys({
    ...ArticleValues,
  })
  .options({ abortEarly: false });
