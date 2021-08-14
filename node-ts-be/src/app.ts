import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import MasterRouter from './routers/main.router';

// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
  public app = express();
  public router = MasterRouter;
}

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// initialize server app
const server = new Server();

// make server app handle any route starting with '/api'
server.app.use(cors(options));
server.app.use(express.json());
server.app.use('/api', server.router);



// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();