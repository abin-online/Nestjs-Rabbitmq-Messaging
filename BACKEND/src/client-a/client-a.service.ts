import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ClientAService {
  constructor(@Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy) {}

  sendMessageToB(message: string) {
    const payload = {
      sender: 'clientA',
      message,
    };
    return this.client.emit('to-clientB', payload);
  }
}
