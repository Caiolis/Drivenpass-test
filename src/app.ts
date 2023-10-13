import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import { userRouter, credentialRouter } from './routes';
import { handleApplicationErrors } from './middlewares';
import { connectDb, disconnectDB } from './config';
import dotenv from "dotenv";
dotenv.config();

const app = express();

app
    .use(cors())
    .use(express.json())
    .use('/users', userRouter)
    .use(handleApplicationErrors);

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export default app;