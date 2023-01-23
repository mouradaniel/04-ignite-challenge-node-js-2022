import express, { NextFunction, Request, Response } from "express";

import "express-async-errors";

import { AppError } from "./modules/users/error/AppError";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use(
  (error: Error, req: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        error: error.error,
      });
    }

    return response.status(500).json({
      status: "error",
      error: `Internal server error - ${error.message}`,
    });

    next();
  }
);

export { app };
