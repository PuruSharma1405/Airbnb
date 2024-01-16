import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cors = require('cors')
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors())
  app.enableCors({
    origin : '*',
    methods : 'GET , POST , PUT , PATCH , DELETE'
  })
  await app.listen(3000);
}
bootstrap();
