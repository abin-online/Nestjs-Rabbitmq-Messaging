import { Controller, Post, Body } from '@nestjs/common';
import { ClientAService } from './client-a.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('client-a')
export class ClientAController {
  constructor(private readonly clientAService: ClientAService) { }

  //send message to B
  @Post('send')
  sendMessage(@Body('message') message: string) {
    this.clientAService.sendMessageToB(message);
    return { status: 'Message sent from Client A to Client B' };
  }

  //receive message from B
  @EventPattern('to-clientA')
  handleMessageFromB(@Payload() data: any) {
    console.log('Received message from Client B:', data);
  }
}
