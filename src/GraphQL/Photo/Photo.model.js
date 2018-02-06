import mongoose, { Schema } from 'mongoose';

const schema = Schema({
  data: { type: String, required: true },
}, {
  timestamps: true,
});

export default mongoose.model('Photo', schema);
