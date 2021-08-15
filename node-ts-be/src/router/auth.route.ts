import { Application, Request, Response } from "express";
import { RouteConfig } from "./common.route";
import AuthController from "../controller/auth.controller";

export class AuthRoutes extends RouteConfig {
  constructor(app: Application) {
    super(app, "AuthRoutes")
  }

  configureRoutes() {
    this.app.route("/login").post(AuthController.login)

    return this.app
  }
}