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

  public async bookCar(id: String) {
    const booking = await Booking.findOne({ car: id }).exec();

    if (!booking) {
      const newBooking = new Booking({
        car: id,
        date: new Date(),
      });

      return newBooking.save();
    }

    throw new Error('Car is already booked!');
  }
}
