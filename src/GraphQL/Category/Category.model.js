import mongoose, { Schema } from 'mongoose';

const schema = Schema({
  title: { type: String, required: true },
  icon: { type: String, required: false },
  parent: { type: Schema.Types.ObjectId, ref: 'Category', required: false },
}, {
  timestamps: true,
});

export default mongoose.model('Category', schema);
