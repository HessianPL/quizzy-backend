import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from "uuid";
import {QuizEntity} from "../types";

type QuizRecordResults = [QuizEntity[], FieldPacket[]];

export class QuizRecord implements QuizEntity {
    public description: string;
    public endingFeedback: boolean;
    public id: string;
    public instantFeedback: boolean;
    public passingPercentage: number;
    public password: string;
    public passwordForEdit: string;
    public passwordProtected: boolean;
    public publicListing: boolean;
    public timerQuiz: number;
    public title: string;

    static async showOneQuiz(id: string): Promise<QuizEntity> {
        const [result] = await pool.execute('SELECT * FROM `quizzes` WHERE `id` = :id', {
            id
        }) as QuizRecordResults;

        return result.length === 0 ? null : result[0];
    }

    static async listAll(limit: number, offset: number): Promise<QuizEntity[]> {
        const [results] = await pool.execute('SELECT * FROM `quizzes` LIMIT :limit OFFSET :offset', {
            limit, offset
        }) as QuizRecordResults;
        return results;
    }

}