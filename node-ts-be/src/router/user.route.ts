import { RouteConfig } from "./common.route"
import express, { Application, Request, Response } from "express"
import UserController from "../controller/user.controller";

export class UserRoutes extends RouteConfig {
  constructor(app: Application) {
    super(app, "UserRoutes")
  }

  configureRoutes() {
    this.app.route(`/users`).get([UserController.getUsers])

    return this.app
  }
}