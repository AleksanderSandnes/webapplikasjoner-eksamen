import Article from '../models/article.js';
/* import { ApiFilters } from '../utils/apiFilters.js'; */

export const createArticle = async (data) => Article.create(data);

export const getArticleById = async (id) => Article.findById(id);
/* 
export const listArticles = async () => Article.find();
 */
export const listArticles = async () => {
  const articles = await Article.find().populate('categoryId image');
  return articles;
};

/* export const listArticles = async (queryStr) => {
  const { limit, page } = queryStr;
  const filters = new ApiFilters(Article.find(), queryStr)
    .filter()
    .sort()
    .limitFields()
    .searchByQuery();

  const articles = await filters.query;
  const paginated = await filters.pagination().query.populate('user', 'email');

  return {
    results: articles.length,
    totalPages: Math.ceil(articles.length / limit) || 1,
    currentPage: page && page > 0 ? parseInt(page) : 1,
    data: paginated,
  };
}; */

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
