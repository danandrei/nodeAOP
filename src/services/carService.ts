import mongoose, { Document } from 'mongoose';
import { Car, Booking } from '../models';

export class CarService {

    public getCar(id: String) {
        return Car.findOne({ _id: id }).exec();
    }

    public getCars() {
        return Car.find({}).exec();
    }

    public createCar(make: String, model: String, year: Number) {
        const car = new Car({make, model, year});

        return car.save();
    }

    public getBookings() {
        return Booking
        .find({})
        .populate([{
            path: 'car'
        }])
        .exec()
    }

    public bookCar(id: String) {

        return Booking.
        findOne({ car: id }).exec()
        .then((booking: Document) => {

            if (!booking) {
                const newBooking = new Booking({
                    car: id,
                    date: new Date(),
                });

                return newBooking.save();
            }

            return Promise.reject('Car is already booked.');
        });
    }
}