import idToString from '../../Helpers/idToString';

const getCategories = async (parent, args, { Category }) =>
  (await Category
    .find()
    .populate('parent')
  ).map(idToString);

const getCategory = async (parent, { _id }, { Category }) =>
  idToString(await Category
    .findOne({ _id })
    .populate('parent'));

const insertCategory = async (root,
  {
    title,
    icon,
    parent,
  },
  { Category }) => idToString(await
  Category.create({
    title,
    icon,
    parent,
  }));

export const Query = {
  categories: getCategories,
  category: getCategory,
};

export const Mutation = {
  insertCategory,
};
