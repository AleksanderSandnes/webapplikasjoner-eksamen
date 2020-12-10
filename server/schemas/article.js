import Joi from 'joi';

const ArticleValues = {
  title: Joi.string().title().required.messages({
    'any.required': 'Tittel må fylles ut',
    'string.empty': 'Fyll ut tittel',
  }),
  ingress: Joi.string().ingress().required.messages({
    'any.required': 'Ingress må fylles ut',
    'string.empty': 'Fyll ut ingress',
  }),
  content: Joi.string().content().required.messages({
    'any.required': 'Innhold må fylles ut',
    'string.empty': 'Fyll ut innhold',
  }),
  category: Joi.string().category().required.messages({
    'any.required': 'Kategori må fylles ut',
    'string.empty': 'Fyll ut kategori',
  }),
  author: Joi.string().author().required.messages({
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
