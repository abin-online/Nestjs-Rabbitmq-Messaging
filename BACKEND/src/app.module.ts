import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientAService } from './client-a/client-a.service';
import { ClientAController } from './client-a/client-a.controller';
import { ClientBController } from './client-b/client-b.controller';
import { ClientBService } from './client-b/client-b.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.registerAsync([
      {
        name: 'RABBITMQ_SERVICE',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.getOrThrow<string>('RABBITMQ_URL')],
            queue: 'to-clientB',
            queueOptions: { durable: true },
          },
        }),

      },
      {
        name: 'RABBITMQ_CLIENT_B',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.getOrThrow<string>('RABBITMQ_URL')],
            queue: 'to-clientB',
            queueOptions: { durable: true },
          },
        }),

      },
    ]),
  ],
  controllers: [ClientAController, ClientBController],
  providers: [ClientAService, ClientBService],
})
export class AppModule { }
