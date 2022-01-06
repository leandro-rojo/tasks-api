import express from 'express';
import cors from 'cors';
import tasksRoutes from './routes/tasks';
import morgan from 'morgan';
import { config as dotenv } from 'dotenv';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import {swaggerOptions } from './swaggerOptions'
const swaggerSpecs = swaggerJSDoc(swaggerOptions);

dotenv();
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(tasksRoutes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

export default app;