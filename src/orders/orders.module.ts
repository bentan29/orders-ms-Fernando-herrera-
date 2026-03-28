import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],

  //*- Hacemos esta importacion por que nos comunicamos con el microservicio de productos
  imports: [NatsModule]
})
export class OrdersModule {}
