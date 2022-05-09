import { Module } from '@nestjs/common';
import { CategoryService } from '../category/category.service';
import { ProductService } from '../product/product.service';
import { CategoryModule } from '../category/category.module';
import { ProductModule } from '../product/product.module';
import { Seed } from './seed.service';
import { Product } from '../product/product.model';
import { Category } from '../category/category.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [Seed],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'postgres',
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          username: process.env.DB_USER,
          password: process.env.DB_PASS,
          database: process.env.DB_NAME,
          entities: [Product, Category],
          synchronize: true,
          ssl: false,
        };
      },
    }),
    ProductModule,
    CategoryModule,
  ],
})
export class SeedModule {}
