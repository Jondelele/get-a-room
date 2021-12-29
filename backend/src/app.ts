import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
// import mongoose from 'mongoose';

// import { authFilter, parseToken, validateAccessToken } from './authMiddleware';
import { checkEnvVariables } from './utils/checkEnvVariables';
// import { getDatabaseUrl } from './utils/config';

import { router as indexRouter } from './routes/index';

const app = express();
const port = 8080;

checkEnvVariables();

// mongoose
//     .connect(getDatabaseUrl())
//     .then(() => console.info('Mongo connection - OK'));

// Options for CORS
const corsOptions: CorsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000'
};

app.use(morgan('short'));
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// app.use(parseToken().unless(authFilter));
// app.use(validateAccessToken().unless(authFilter));

app.use('/api', indexRouter);

app.listen(port, () => {
    console.log(`Get A Room! API listening at port ${port}`);
});
