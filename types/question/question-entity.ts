export interface QuestionEntity {
    id?: string,
    quizID: string,
    text: string,
    answer1: string,
    answer1isValid: 0 | 1,
    answer2: string,
    answer2isValid: 0 | 1,
    answer3: string,
    answer3isValid: 0 | 1,
    answer4: string,
    answer4isValid: 0 | 1,
}