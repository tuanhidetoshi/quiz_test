import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Quiz } from 'src/database/models/quiz.model';
import { QuizUser } from 'src/database/models/quizuser.model';
import { QuizzesController } from './quiz.controller';
import { QuizzesService } from './quiz.service';

@Module({
    imports: [SequelizeModule.forFeature([Quiz, QuizUser])],
    controllers: [QuizzesController],
    providers: [QuizzesService],
})
export class QuizzesModule {}