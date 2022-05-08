import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const ProductOptions = new DocumentBuilder()
    .setTitle('Product example')
    .setDescription('The product API description')
    .setVersion('1.0')
    .addTag('products')
    .build();
  const ProductDocument = SwaggerModule.createDocument(app, ProductOptions, {
    include: [ProductModule],
  });
  SwaggerModule.setup('doc/products', app, ProductDocument);

  const CategoryOptions = new DocumentBuilder()
    .setTitle('Category example')
    .setDescription('The category API description')
    .setVersion('1.0')
    .addTag('categories')
    .build();
  const CategoryDocument = SwaggerModule.createDocument(app, CategoryOptions, {
    include: [CategoryModule],
  });
  SwaggerModule.setup('doc/categories', app, CategoryDocument);

  await app.listen(process.env.APP_PORT);
}
bootstrap();
