import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ClientsModule } from '../modules/clients/clients.module';

export function setupSwagger(app: INestApplication, version = 'v1'): void {
  // 스웨거, 설정파일로 빼도 될듯.
  const swaggerDocUrl = `${process.env.SWAGGER_DOC_URL}/${version}/doc`;
  const appName = `${process.env.APP_NAME}`;
  const swaggerConfig = new DocumentBuilder()
    .setTitle(`${appName} ${version}`)
    .setDescription(`${appName} APIs`)
    .setVersion(`${version}`)
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-AUTH',
    )
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    include: [ClientsModule],
  });
  SwaggerModule.setup(swaggerDocUrl, app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });
}
