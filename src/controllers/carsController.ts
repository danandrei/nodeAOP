import { Document } from 'mongoose';
import { Request, Response } from 'express';
import { CarService } from '../services';
import { Wove } from 'aspect.js';

@Wove()
export class CarsController  {
    public carService: CarService = new CarService();

    public async createCar (req: Request, res: Response) {
      const data = req.body;

      try {
        const car = await this.carService.createCar(data.make, data.model, data.year);

        res.render('new', { notice: 'Car added!'})
      } catch (error) {
        res.render('new', { error: error.message });
      }
    }

    public async bookCar (req: Request, res: Response) {
      const car = await this.carService.getCar(req.params.id);

      try {
        await this.carService.bookCar(car._id);

        res.render('car', { car, notice: 'Car booked!'});
      } catch (error) {
        res.render('car', { error: error.message });
      }
    }
}
