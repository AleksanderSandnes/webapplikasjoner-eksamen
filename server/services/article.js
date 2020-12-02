import Article from '../models/article.js';

export const createArticle = async (data) => Article.create(data);

export const getArticleById = async (id) => Article.findById(id);

export const listArticles = async () => Article.find();

export const updateArticle = async (id, data) =>
  Article.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeArticle = async (id) => {
  const article = await Article.findById(id);
  article.remove();
};
