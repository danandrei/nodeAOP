import { Document } from 'mongoose';
import { Request, Response } from 'express';
import { CarService, UserService } from '../services';
import { LoggerAspect } from '../aspects';
import { Wove } from 'aspect.js';

@Wove()
export class PagesController {
  public carService: CarService = new CarService();
  public userService: UserService = new UserService();

  public async getCarsPage(req: Request, res: Response) {

    const cars = await this.carService.getCars();
    res.render('cars', { cars });
  }

  public async getCarPage(req: Request, res: Response) {

    const car = await this.carService.getCar(req.params.id)
    res.render('car', { car });
  }

  public getLoginPage(req: Request, res: Response) {

    res.render('login', { });
  }

  public async login(req: Request, res: Response) {
    const data = req.body;

    const user = await this.userService.getUser (data.username);
    if (!user || user.password !== data.password) {
      return res.render('login', { error: new Error('invalid user credentials')});
    }

    req.session.user = data.username;
    res.redirect('/admin');
  }

  public logout (req: Request, res: Response) {
    req.session.user = null;
    res.redirect('/');
  }

  public async getAdminPage(req: Request, res: Response) {

    const bookings = await this.carService.getBookings();
    res.render('admin', { bookings });
  }

  public getNewPage(req: Request, res: Response) {

    res.render('new');
  }
}
