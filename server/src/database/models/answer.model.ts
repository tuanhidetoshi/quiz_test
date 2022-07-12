import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Quiz } from './quiz.model';

@Table({
    createdAt: true,
    updatedAt: true
})
export class Answer extends Model {
    @Column({
        type: DataType.STRING,
        field: 'content',
        allowNull: false
    })
    content: string
    
    @Column({
        defaultValue: false,
        field: 'is_correct'
    })
    isCorrect: boolean

    @ForeignKey(() => Quiz)
    @Column({
        field: 'quiz_id'
    })
    quizId: number
}