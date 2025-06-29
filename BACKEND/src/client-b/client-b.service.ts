import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ClientBService {
    constructor(@Inject('RABBITMQ_CLIENT_B') private readonly client: ClientProxy) { }

    sendMessageToA(message: string) {
        const payload = {
            sender: 'clientB',
            message,
        };
        this.client.emit('to-clientA', payload);
        return {
            status: "Message sent from Client B to Client A"
        }

    }
}
