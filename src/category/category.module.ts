import { Module } from '@nestjs/common';
import { Category } from './category.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  providers: [CategoryService],
  controllers: [CategoryController],
  imports: [TypeOrmModule.forFeature([Category])],
  exports: [CategoryService],
})
export class CategoryModule {}
