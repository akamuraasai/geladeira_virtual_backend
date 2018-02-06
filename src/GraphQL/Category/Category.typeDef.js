export const Category = `
  type Category {
    _id: String!, 
    title: String!,
    icon: String,
    parent: Category
  }
`;

export const Query = `
  category(_id: String): Category 
  categories: [Category] 
`;

export const Mutation = `
  insertCategory(
    title: String!,
    icon: String,
    parent: String
  ): Category!
`;
