import { Controller, Post, Body } from '@nestjs/common';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { ClientBService } from './client-b.service';

@Controller('client-b')
export class ClientBController {
  constructor(private readonly clientBService: ClientBService) { }

  @Post('send')
  sendMessage(@Body('message') message: string) {
    return this.clientBService.sendMessageToA(message);
  }

  @EventPattern('to-clientB')
  async handleMessage(@Payload() data: any, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();

    try {
      console.log('Received message from Client A:', data);


      if (data.message.includes('fail')) {
        throw new Error(' Simulated processing error!');
      }

      // ACK when it is a success
      channel.ack(originalMessage);
    } catch (err: any) {
      console.error('Error:', err.message);

      // NACK with requeue once
      const retries = originalMessage.properties.headers['x-retries'] || 0;
      if (retries < 2) {
        //retry header and requeue
        channel.nack(originalMessage, false, true);
      } else {
        console.log('maximum retries exceeded');
        channel.nack(originalMessage, false, false); // DLQ.push if it is  configured
      }
    }
  }
}
