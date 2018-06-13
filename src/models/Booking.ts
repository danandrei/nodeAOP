import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    car: {
        type: Schema.Types.ObjectId,
        ref: 'cars',
    },
    date: {
        type: Date,
    }
}, { timestamps: true });

export const Booking = mongoose.model('bookings', bookingSchema);