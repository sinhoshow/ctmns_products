import 'reflect-metadata';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from '../../swagger.json';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import AppError from '@errors/AppError';
import routes from '../../routes';
import './typeorm';
import cors from 'cors';
import createConnnection from "./typeorm";

import "@shared/container";

createConnnection();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: err.message,
    });
});

export { app };
