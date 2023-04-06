import {QuizEntity} from "./quiz-entity";

export type QuizEntityResponse = Omit<QuizEntity, 'password' | 'passwordForEdit'> 

//
// {
//     id: string;
//     passwordProtected: boolean;
//     password?: string;
//     passwordForEdit?: string;
//     publicListing: boolean;
//     instantFeedback: boolean;
//     endingFeedback: boolean;
//     timerQuiz?: number;
//     passingPercentage: number;
//     title: string;
//     description: string;
// }