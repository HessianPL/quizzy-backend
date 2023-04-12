import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express, {json} from 'express';
import rateLimit from 'express-rate-limit'
import 'express-async-errors';
import {QuizRecord} from "./records/Quiz.record";
import {QuizRouter} from "./routers/QuizRouter";
import {QuestionRouter} from "./routers/QuestionRouter";

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Rate limit exceeded, try again later'
})

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(json());
app.use(limiter)

app.get('/', (req, res) => {
    res.send('Working fine sir!')
})

app.use('/quiz', QuizRouter);
app.use('/question', QuestionRouter);

app.listen(3001, () => {
    console.log(`Listening on http://localhost:3001`)
});