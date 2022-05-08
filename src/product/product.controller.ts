import {
  Body,
  Controller,
  Delete,
  Get,
  Put,
  Param,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateDto, UpdateDto } from './product.dto';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  list(@Query('page') page: number): Promise<Product[]> {
    return this.service.list(page);
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.service.find(id);
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.service.create(createDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.service.remove(id);
  }

  @Get('/discount/:id')
  discount(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.service.discount(id);
  }
}
