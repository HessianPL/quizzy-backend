export interface QuizEntity {
    id: string;
    passwordProtected: 0 | 1;
    password?: string;
    passwordForEdit?: string;
    publicListing: 0 | 1;
    instantFeedback: 0 | 1;
    endingFeedback: 0 | 1;
    timerQuiz?: number;
    passingPercentage: number;
    title: string;
    description: string;
}