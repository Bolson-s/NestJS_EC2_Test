import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { AppController } from './app.controller';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Configurar os diretórios de views e arquivos estáticos
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('html'); // Usar html como extensão
  app.engine('html', require('ejs').renderFile); // Usar EJS para renderizar arquivos .html
  
  await app.listen(3000);
}
bootstrap();