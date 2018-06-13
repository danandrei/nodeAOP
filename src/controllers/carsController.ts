import { Document } from 'mongoose';
import { Request, Response } from 'express';
import { CarService } from '../services';

export class CarsController  {
    public carService: CarService = new CarService();

    public createCar (req: Request, res: Response) {
        const data = req.body;

        this.carService
        .createCar(data.make, data.model, data.year)
        .then((car: Document) => {
            console.log(car);
            res.render('new', { notice: 'Car added!'});
        }).catch(error => {
            res.render('new', { error: error.message });
        });
    }

    public async bookCar (req: Request, res: Response) {
        const car = await this.carService.getCar(req.params.id);

        this.carService.bookCar(car._id)
        .then((booking: Document) => {

            res.render('car', { car, notice: 'Car booked!'});
        }).catch(error => {
            res.render('car', { car, error });
        });
    }
}