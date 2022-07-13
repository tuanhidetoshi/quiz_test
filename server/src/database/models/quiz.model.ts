import { QuizUser } from './quizuser.model';
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Answer } from './answer.model';
import { User } from './user.model';

@Table({
  createdAt: true,
  updatedAt: true,
})
export class Quiz extends Model {
  @Column({
    type: DataType.STRING,
    field: 'question',
    allowNull: false,
  })
  question: string;

  @HasMany(() => Answer)
  answers: Answer[];

  @BelongsToMany(() => User, () => QuizUser)
  answeredUsers: User[];
}
