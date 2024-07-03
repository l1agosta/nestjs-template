import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {BROKER_CONFIG} from "./broker.config";
import {DB_CONFIG} from "./modules/app/db.config";

async function bootstrap() {
  const PORT = process.env.PORT || 8080;

  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>(BROKER_CONFIG);

  await app.startAllMicroservices();
  await app.listen(PORT, () => {
    console.log(`microservice -> http://localhost:${PORT}`);
  });
}

bootstrap();
