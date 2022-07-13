import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Quiz } from './quiz.model';
import { QuizUser } from './quizuser.model';

@Table({
  createdAt: true,
  updatedAt: true,
})
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    field: 'user_id',
  })
  userId: string;

  @Column({
    type: DataType.STRING,
    field: 'display_name',
    allowNull: false,
  })
  displayName: string;

  @Column({
    type: DataType.STRING,
    field: 'avatar',
  })
  avatar: string;

  @BelongsToMany(() => Quiz, () => QuizUser)
  answeredQuiz: Quiz[];
}
