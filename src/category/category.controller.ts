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
import { CreateDto, UpdateDto } from './category.dto';
import { CategoryService } from './category.service';
import { Category } from './category.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @Get()
  list(@Query('page') page: number): Promise<Category[]> {
    return this.service.list(page);
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number): Promise<Category> {
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
}
