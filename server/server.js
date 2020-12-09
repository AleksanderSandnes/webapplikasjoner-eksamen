import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import hpp from 'hpp';
import xssClean from 'xss-clean';
/* import csrf from 'csurf'; */
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';

import { PORT } from './constants/index.js';
import 'dotenv/config.js';
import errorMiddleware from './middleware/errors.js';

import connectDatabase from './config/db.js';
import category from './routes/category.js';
import user from './routes/user.js';
import article from './routes/article.js';
import auth from './routes/auth.js';
import image from './routes/image.js';
import supportEmail from './routes/supportEmail.js';
import location from './routes/location.js';

const app = express();
app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5000,
});

app.use(limiter);

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    credentials: true,
  })
);

app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  /* app.use(csrf({ cookie: true })); */
}

app.get(`${process.env.BASEURL}/csrf-token`, (req, res) => {
  res.status(200).json({ data: req.csrfToken() });
});

app.use(`${process.env.BASEURL}/users`, user);
app.use(`${process.env.BASEURL}/articles`, article);
app.use(`${process.env.BASEURL}/categories`, category);
app.use(`${process.env.BASEURL}/contact`, supportEmail);
app.use(`${process.env.BASEURL}/locations`, location);
app.use(`${process.env.BASEURL}/supportemail`, supportEmail);
app.use(`${process.env.BASEURL}/`, auth);
app.use(`${process.env.BASEURL}/`, image);

app.use(errorMiddleware);

connectDatabase();

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to Unhandled Promise Rejection');
  server.close(() => {
    process.exit(1);
  });
});
