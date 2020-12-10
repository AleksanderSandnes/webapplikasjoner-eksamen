import Article from '../models/article.js';
import { ApiFilters } from '../utils/apiFilters.js';

export const createArticle = async (data) => Article.create(data);

export const getArticleById = async (id) => {
  const article = Article.findById(id).populate('categoryId image');
  return article;
};

export const listArticles = async (queryStr) => {
  const { limit, page } = queryStr;
  const filters = new ApiFilters(Article.find(), queryStr)
    .sort()
    .filter()
    .searchByQuery();

  console.log(filters);
  const articles = await filters.query;
  const paginated = await filters.query.populate('categoryId image');
  return {
    results: articles.length,
    totalPages: Math.ceil(articles.length / limit) || 1,
    currentPage: page && page > 0 ? parseInt(page) : 1,
    data: paginated,
  };
};

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

/* export const totalArticleViews = async (query) => {
  const articles = await Article.aggregate([
    {
      $match: 
    }
  ])
}; */
