import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Quiz } from './quiz.model';
import { User } from './user.model';

@Table({
  createdAt: true,
  updatedAt: true,
})
export class QuizUser extends Model {
  // 0: success at first attempt
  // 1: incorrect answer
  // 2: success at second attempt
  @Column({
    type: DataType.SMALLINT,
    field: 'status',
    allowNull: false,
  })
  status: number;

  @ForeignKey(() => User)
  @Column({
    field: 'user_id',
    allowNull: false,
  })
  userId: number;

  @ForeignKey(() => Quiz)
  @Column({
    field: 'quiz_id',
    allowNull: false,
  })
  quizId: number;
}
