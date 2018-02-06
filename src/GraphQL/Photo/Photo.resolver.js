import idToString from '../../Helpers/idToString';

const getPhotos = async (parent, args, { Photo }) =>
  (await Photo
    .find()
  ).map(idToString);

const getPhoto = async (parent, { _id }, { Photo }) =>
  idToString(await Photo
    .findOne({ _id }));

const insertPhoto = async (root,
  {
    data,
  },
  { Photo }) => idToString(await
  Photo.create({
    data,
  }));

export const Query = {
  photos: getPhotos,
  photo: getPhoto,
};

export const Mutation = {
  insertPhoto,
};
