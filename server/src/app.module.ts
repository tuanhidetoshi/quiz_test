import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Modules
import { AnswerModule } from './modules/answers/answer.module';
import { AuthModule } from './modules/auth/auth.module';
import { QuizzesModule } from './modules/quizzes/quiz.module';
import { UsersModule } from './modules/users/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize/types';

declare var process: {
  env: {
      DATABASE_DIALECT: Dialect,
      DATABASE_URL: string,
      DATABASE_PORT: number,
      DATABASE_USERNAME: string,
      DATABASE_PASSWORD: string,
      DATABASE_NAME: string
  }
}

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: process.env.DATABASE_DIALECT,
      host: process.env.DATABASE_URL,
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadModels: true,
      synchronize: true
    }),
    UsersModule, 
    QuizzesModule, 
    AnswerModule, 
    AuthModule
  ]
})
export class AppModule {}
