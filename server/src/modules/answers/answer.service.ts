import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Answer } from 'src/database/models/answer.model';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(Answer)
    private answerModel: typeof Answer,
  ) {}

  create(answer: Answer) {
    return;
  }
}
