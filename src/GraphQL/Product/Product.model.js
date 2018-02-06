import mongoose, { Schema } from 'mongoose';

const schema = Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  photos: [{ type: Schema.Types.ObjectId, ref: 'Photo' }],
  title: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
}, {
  timestamps: true,
});

export default mongoose.model('Product', schema);
