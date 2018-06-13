import { Document } from 'mongoose';
import { Request, Response } from 'express';
import { CarService } from '../services';

export class PagesController {
    public carService: CarService = new CarService();

    public getCarsPage(req: Request, res: Response) {

        this.carService
        .getCars()
        .then((cars: [Document]) => {
            res.render('cars', { cars });
        })
    }

    public getCarPage(req: Request, res: Response) {

        this.carService
        .getCar(req.params.id)
        .then((car: Document) => {
            res.render('car', { car });
        });
    }

    public getAdminPage(req: Request, res: Response) {

        this.carService
        .getBookings()
        .then((bookings: [Document]) => {
            res.render('admin', { bookings });
        })
    }

    public getNewPage(req: Request, res: Response) {
        res.render('new');
    }
}
