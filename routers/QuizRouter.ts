import {Request, Response} from "express";
import {QuizRecord} from "../records/Quiz.record";
import {QuizEntityResponse} from "../types";

const express = require('express');

export const QuizRouter = express.Router();

QuizRouter.get('/', async (req: Request, res: Response):Promise<void> => {
    const quizList = await QuizRecord.listAll(10,0);
    const quizListResponse: QuizEntityResponse[] = quizList.map(quiz => {
        const { password, passwordForEdit, ...newObject }  = quiz;
        return newObject
    });
    res.send(quizListResponse)
})

QuizRouter.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const foundQuiz = await QuizRecord.showOneQuiz(id);
    res.send(foundQuiz);
})

QuizRouter.post('/',  async(req: Request, res: Response) => {
    const data = {
        ...req.body
    }
    const newQuiz = await new QuizRecord(data);
    const newQuizID = await newQuiz.insert();
    res.status(201).json(`New added with an ID of ${newQuizID}`);
})