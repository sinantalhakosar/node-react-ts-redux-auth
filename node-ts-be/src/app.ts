import dotenv from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import { RouteConfig } from "./router/common.route";
import { UserRoutes } from "./router/user.route";
import { AuthRoutes } from "./router/auth.route";
import * as http from "http"

const routes: Array<RouteConfig> = []

const app: Express = express()

dotenv.config({})

const PORT = process.env.PORT || 5000

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// make server app handle any route starting with '/api'
app.use(cors(options));
app.use(express.json());

routes.push(new UserRoutes(app));
routes.push(new AuthRoutes(app));

const server: http.Server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)

  routes.forEach((route: RouteConfig) => {
    console.log(`Routes configured for ${route.getName()}`)
  })
})