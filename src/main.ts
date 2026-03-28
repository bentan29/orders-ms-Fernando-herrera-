import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  // const app = await NestFactory.create(AppModule);

  const app = await NestFactory.createMicroservice<MicroserviceOptions> (
    AppModule,
    {
        //* Sin Nats
      // transport: Transport.TCP,
      // options: {
      //   port: envs.port
      // }
        //* Con Nats
      transport: Transport.NATS,
      options: {
        servers: envs.natsServers
      }
    }
  )


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, 
      forbidNonWhitelisted: true
    })
  )



  // await app.listen(envs.port); //- para iniciar api rest
  await app.listen(); //- microservicio

}
bootstrap();
