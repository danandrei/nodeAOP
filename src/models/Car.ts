import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const carSchmema = new Schema({
  make: {
    type: String,
    required: 'Make is required!',
  },
  model: {
    type: String,
    required: 'Model is required!',
  },
  year: {
    type: Number,
    required: 'Year is required!',
  }
}, { timestamps: true });

export const Car = mongoose.model('cars', carSchmema);
