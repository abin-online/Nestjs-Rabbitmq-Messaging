import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientAService } from './client-a/client-a.service';
import { ClientAController } from './client-a/client-a.controller';
import { ClientBController } from './client-b/client-b.controller';
import { ClientBService } from './client-b/client-b.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RABBITMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'to-clientB',
          queueOptions: { durable: true },
        },
      },
      {
        name: 'RABBITMQ_CLIENT_B',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'to-clientA',
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  controllers: [ClientAController, ClientBController],
  providers: [ClientAService, ClientBService],
})
export class AppModule {}
