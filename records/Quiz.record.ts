import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from "uuid";
import {QuizEntity} from "../types";

type QuizRecordResults = [QuizEntity[], FieldPacket[]];

export class QuizRecord implements QuizEntity {
    public description: string;
    public endingFeedback: 0 | 1;
    public id: string;
    public instantFeedback: 0 | 1;
    public passingPercentage: number;
    public password: string = '';
    public passwordForEdit: string = '';
    public passwordProtected: 0 | 1;
    public publicListing: 0 | 1;
    public timerQuiz: number;
    public title: string;

    constructor(obj: QuizEntity) {
        this.id = obj.id;
        this.description = obj.description;
        this.endingFeedback = obj.endingFeedback;
        this.instantFeedback = obj.instantFeedback;
        this.passingPercentage = obj.passingPercentage;
        this.password = obj.password;
        this.passwordForEdit = obj.passwordForEdit;
        this.passwordProtected = obj.passwordProtected;
        this.publicListing = obj.publicListing;
        this.timerQuiz = obj.timerQuiz;
        this.title = obj.title;
    }

    public async insert(): Promise<string> {
        if (!this.id) {
            this.id = uuid();
        }

        await pool.execute("INSERT INTO `quizzes` VALUES (:id, :passwordProtected, :password, :passwordForEdit, :publicListing, :instantFeedback, :endingFeedback, :timerQuiz, :passingPercentage, :title, :description)", {
            id: this.id,
            passwordProtected: Boolean(this.passwordProtected),
            password: this.password || null,
            passwordForEdit: this.passwordForEdit || null,
            publicListing: Boolean(this.publicListing),
            instantFeedback: Boolean(this.instantFeedback),
            endingFeedback: Boolean(this.endingFeedback),
            timerQuiz: this.timerQuiz,
            passingPercentage: this.passingPercentage,
            title: this.title,
            description: this.description,
        });

        return this.id;
    }

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