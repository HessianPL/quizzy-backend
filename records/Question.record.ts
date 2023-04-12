import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from "uuid";
import {QuestionEntity} from "../types";

type QuestionRecordResults = [QuestionEntity[], FieldPacket[]];

export class QuizRecord implements QuestionEntity {
    public id?: string;
    public quizID: string;
    public text: string;
    public answer1: string;
    public answer1isValid: 0 | 1;
    public answer2: string;
    public answer2isValid: 0 | 1;
    public answer3: string;
    public answer3isValid: 0 | 1;
    public answer4: string;
    public answer4isValid: 0 | 1;

    constructor(obj: QuestionEntity) {
        this.id = obj.id;
        this.quizID = obj.quizID;
        this.text = obj.text;
        this.answer1 = obj.answer1;
        this.answer2 = obj.answer2;
        this.answer3 = obj.answer3;
        this.answer4 = obj.answer4;
        this.answer1isValid = obj.answer1isValid;
        this.answer2isValid = obj.answer2isValid;
        this.answer3isValid = obj.answer3isValid;
        this.answer4isValid = obj.answer4isValid;
    }

    public async insert(): Promise<string> {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `questions` VALUES (:id, :quizID, :text, :answer1, :answer2, :answer3, :answer4, :answer1isValid, :answer2isValid, :answer3isValid, :answer4isValid)", {
            id: this.id,
            quizID: this.quizID,
            text: this.text,
            answer1: this.answer1,
            answer2: this.answer2,
            answer3: this.answer3,
            answer4: this.answer4,
            answer1isValid: this.answer1isValid,
            answer2isValid: this.answer2isValid,
            answer3isValid: this.answer3isValid,
            answer4isValid: this.answer4isValid
        });

        console.log('Questions added to the DB!')

        return this.id;
    }
}