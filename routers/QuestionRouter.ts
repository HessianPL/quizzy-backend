import {Request, Response, Router} from "express";
import {QuestionRecord} from "../records/Question.record";
import {QuestionEntity} from "../types";

export const QuestionRouter = Router();


QuestionRouter.post('/',  async(req: Request, res: Response) => {
    const data = {
        ...req.body
    }
    const newQuestion: QuestionRecord = await new QuestionRecord(data);
    const newQuizID = await newQuestion.insert();

    console.log('New question:');
    console.log(newQuestion);

    res.status(201).json(newQuizID);
})