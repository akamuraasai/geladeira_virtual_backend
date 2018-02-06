import idToString from '../../Helpers/idToString';

const getProducts = async (parent, args, { Product }) =>
  (await Product
    .find()
    .populate('owner')
    .populate('categories')
    .populate('photos')
  ).map(idToString);

const getProduct = async (parent, { _id }, { Product }) =>
  idToString(await Product
    .findOne({ _id })
    .populate('owner')
    .populate('categories')
    .populate('photos'));

const insertProduct = async (root,
  {
    owner,
    categories,
    title,
    description,
    price,
    photos,
  },
  { Product }) => idToString(await
  Product.create({
    owner,
    categories,
    title,
    description,
    price,
    photos,
  }));

export const Query = {
  products: getProducts,
  product: getProduct,
};

export const Mutation = {
  insertProduct,
};
