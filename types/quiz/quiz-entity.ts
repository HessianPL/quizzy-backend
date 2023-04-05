export interface QuizEntity {
    id: string;
    passwordProtected: boolean;
    password?: string;
    passwordForEdit?: string;
    publicListing: boolean;
    instantFeedback: boolean;
    endingFeedback: boolean;
    timerQuiz?: number;
    passingPercentage: number;
    title: string;
    description: string;
}