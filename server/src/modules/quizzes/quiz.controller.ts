import { Controller, Get } from '@nestjs/common';
import { QuizzesService } from 'src/modules/quizzes/quiz.service';

@Controller('quiz')
export class QuizzesController {
  constructor(private readonly quizService: QuizzesService) {}

  @Get()
  getQuiz(): string {
    return 'Quiz Service is up';
  }
}
