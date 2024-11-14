import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatMessage } from '../chat-message.entity/chat-message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {
    constructor(@InjectRepository(ChatMessage)
    private chatMessageRepository: Repository<ChatMessage>
){}

    async saveMessage(username: string, message: string): Promise<ChatMessage>{
        const chatMessage = this.chatMessageRepository.create({username, message});
        return await this.chatMessageRepository.save(chatMessage);
    }

    async getMessage(): Promise<ChatMessage[]>{
        return await this.chatMessageRepository.find({
            order: {createdAt: 'ASC'}, 
        })
    } 
}
