import { NextFunction, Request, Response, Router } from 'express';
import ThemeAController from '../controllers/Login.controller';
import jwt from 'jsonwebtoken';

interface UserProps {
    _id: string,
    username: string,
    token: string,
}

class ThemeARouter {
  private _router = Router();
  private _controller = ThemeAController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {
    this._router.post('/', (req: Request, res: Response, next: NextFunction) => {
        try {
            const { username, password } = req.body;

            // Validate user input
            if (!(username && password)) {
                res.status(400).send("All input is required");
            }
            let user = {} as UserProps;
            // Create token
            const token = jwt.sign({ user_id: user._id, username },'1khj12g37123k',
                {
                    expiresIn: "2h",
                }
            );

            user.token = token;
            // user
            res.status(200).json(user);
        } catch (error) {
            
        }
      //res.status(200).json(this._controller.defaultMethod());
    });
  }
}

export = new ThemeARouter().router;