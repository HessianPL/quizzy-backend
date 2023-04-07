import {QuizEntity} from "./quiz-entity";

export type QuizEntityResponse = Omit<QuizEntity, 'password' | 'passwordForEdit'>