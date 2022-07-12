import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Answer } from 'src/database/models/answer.model';
import { AnswerService } from './answer.service';

@Module({
    imports: [SequelizeModule.forFeature([Answer])],
    providers: [AnswerService],
})
export class AnswerModule {}