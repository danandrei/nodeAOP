import { Request, Response, NextFunction } from "express";
import {
  PagesController,
  CarsController,
} from "./controllers";

export class Routes {
  public pagesController: PagesController = new PagesController();
  public carsController: CarsController = new CarsController();

  public routes(app): void {

    app.route('/admin')
    .get(this.pagesController.getAdminPage.bind(this.pagesController));

    app.route('/admin/login')
    .get(this.pagesController.getLoginPage.bind(this.pagesController))
    .post(this.pagesController.login.bind(this.pagesController));

    app.route('/admin/logout')
    .get(this.pagesController.logout.bind(this.pagesController))

    app.route('/admin/new')
    .get(this.pagesController.getNewPage)
    .post(this.carsController.createCar.bind(this.carsController));

    app.route('/')
    .get(this.pagesController.getCarsPage.bind(this.pagesController));

    app.route('/:id')
    .get(this.pagesController.getCarPage.bind(this.pagesController))
    .post(this.carsController.bookCar.bind(this.carsController));

  }
}
