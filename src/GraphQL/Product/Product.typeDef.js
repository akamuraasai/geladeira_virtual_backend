export const Product = `
  type Product {
    _id: String!, 
    owner: User!,
    categories: [Category]!,
    title: String!,
    description: String,
    price: Float!,
    photos: [Photo]!
  }
`;

export const Query = `
  product(_id: String): Product 
  products: [Product] 
`;

export const Mutation = `
  insertProduct(
    owner: String!,
    categories: [String]!,
    title: String!,
    description: String,
    price: Float!,
    photos: [String]!
  ): Product!
`;
