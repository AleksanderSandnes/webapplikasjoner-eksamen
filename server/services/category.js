import Category from '../models/category.js';

export const createCategory = async (data) => Category.create(data);

export const getCategoryById = async (id) => Category.findById(id);

export const listCategories = async () => Category.find();

export const updateCategory = async (id, data) =>
  Category.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removeCategory = async (id) => {
  const category = await Category.findById(id);
  category.remove();
};
