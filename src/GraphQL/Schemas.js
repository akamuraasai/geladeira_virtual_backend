import { makeExecutableSchema } from 'graphql-tools';
import {
  Category,
  Query as categoryQuery,
  Mutation as categoryMutation,
} from './Category/Category.typeDef';

import {
  Query as categoryQueryResolver,
  Mutation as categoryMutationResolver,
} from './Category/Category.resolver';

import {
  Photo,
  Query as photoQuery,
  Mutation as photoMutation,
} from './Photo/Photo.typeDef';

import {
  Query as photoQueryResolver,
  Mutation as photoMutationResolver,
} from './Photo/Photo.resolver';

import {
  Product,
  Query as productQuery,
  Mutation as productMutation,
} from './Product/Product.typeDef';

import {
  Query as productQueryResolver,
  Mutation as productMutationResolver,
} from './Product/Product.resolver';

import {
  User,
  Query as userQuery,
  Mutation as userMutation,
} from './User/User.typeDef';

import {
  Query as userQueryResolver,
  Mutation as userMutationResolver,
} from './User/User.resolver';

const typeDefs = `
  ${User}
  ${Category}
  ${Photo}
  ${Product}
  type Query {
    ${userQuery}
    ${categoryQuery}
    ${photoQuery}
    ${productQuery}
  }
  type Mutation {
    ${productMutation}
    ${categoryMutation}
    ${photoMutation}
    ${userMutation}
  }
`;

const resolvers = {
  Query: {
    ...userQueryResolver,
    ...categoryQueryResolver,
    ...photoQueryResolver,
    ...productQueryResolver,
  },
  Mutation: {
    ...userMutationResolver,
    ...categoryMutationResolver,
    ...photoMutationResolver,
    ...productMutationResolver,
  },
};

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
