export const Photo = `
  type Photo {
    _id: String!, 
    data: String!
  }
`;

export const Query = `
  photo(_id: String): Photo 
  photos: [Photo] 
`;

export const Mutation = `
  insertPhoto(
    data: String!
  ): Photo!
`;

// user 5a791181485bd5a4fea03068
// photos  5a7910b8485bd5a4fea03065 5a791132485bd5a4fea03067
// category 5a7910e1485bd5a4fea03066
