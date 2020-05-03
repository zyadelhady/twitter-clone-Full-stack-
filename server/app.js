const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');

const xss = require('xss-clean');

const cookieParser = require('cookie-parser');
const cors = require('cors');
const usersRouter = require('./routes/usersRouter');
const tweetsRouter = require('./routes/tweetsRouter');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.enable('trust proxy');

app.use(helmet());

// 1) GLOBAL MIDDLEWARES

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.options('*', cors());

// Set security HTTP headers

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution

app.use(compression());

// Serving static files
app.use(express.static(`${__dirname}/build`));
app.use(express.static(path.join(__dirname, 'data')));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/users/', usersRouter);
app.use('/api/v1/tweets/', tweetsRouter);

// 3) ROUTES

app.all('*', (req, res, next) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.use(globalErrorHandler);

module.exports = app;
