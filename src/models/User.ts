import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String,
    }
}, { timestamps: true });

export const User = mongoose.model('users', userSchema);