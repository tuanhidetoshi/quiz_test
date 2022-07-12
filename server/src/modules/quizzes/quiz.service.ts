import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Quiz } from 'src/database/models/quiz.model';

@Injectable()
export class QuizzesService {
    constructor(
        @InjectModel(Quiz)
        private quizModel: typeof Quiz
    ) {}

    create(quiz: Quiz) {
        return;
    }

    answerTheQuiz(quizId: string, userId: string, answerId: string) {
        return;
    }
}
