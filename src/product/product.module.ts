import { Module } from '@nestjs/common';
import { Product } from './product.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { CategoryModule } from '../category/category.module';

@Module({
  providers: [ProductService],
  controllers: [ProductController],
  imports: [TypeOrmModule.forFeature([Product]), CategoryModule],
  exports: [ProductService],
})
export class ProductModule {}
