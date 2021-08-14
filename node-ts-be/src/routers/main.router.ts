import { Router } from 'express';
import ThemeARouter from './Login.router';

class MasterRouter {
  private _router = Router();
  private _subrouterA = ThemeARouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/themeA', this._subrouterA);
  }
}

export = new MasterRouter().router;