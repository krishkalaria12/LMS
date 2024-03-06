import cookieParser from 'cookie-parser';
config();
import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import errorMiddleware from './middlewares/error.middleware.js';
import userRoutes from "./routes/user.routes.js"

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(morgan("dev"))

// Server Status Check Route
app.get('/ping', (_req, res) => {
  res.send('Pong');
});

// Import all routes
app.use("/api/v1/user", userRoutes)

// Default catch all route - 404
app.all('*', (_req, res) => {
  res.status(404).send('OOPS!!! 404 Page Not Found');
});

app.use(errorMiddleware)

export default app;
