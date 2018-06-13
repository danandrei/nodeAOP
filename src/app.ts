import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes";
import mongoose from "mongoose";
import path from "path";

class App {

  public app: express.Application;
  public routePrv: Routes = new Routes();
  public mongoUrl: string = 'mongodb://localhost:27017/carBooking';

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private config(): void{
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // serve views
    this.app.set('view engine', 'pug');
    this.app.set('views', path.join(__dirname, '../src/views'));

    // serving static files
    this.app.use(express.static('public'));
  }

  private mongoSetup(): void{
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }
}

export default new App().app;