import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class ChatMessage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    message: string;

    @CreateDateColumn()
    createdAt: Date;
}
