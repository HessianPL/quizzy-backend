import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express, {json, Router} from 'express';
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

const router = Router();


router.use('/quiz', QuizRouter);
router.use('/question', QuestionRouter);

app.use('/api', router);

app.listen(3001, () => {
    console.log(`Listening on http://localhost:3001`)
});