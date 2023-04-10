import {QuizEntity} from "./quiz-entity";

export type QuizEntityIncoming = Omit<QuizEntity, 'id' | 'password' | 'passwordForEdit'>