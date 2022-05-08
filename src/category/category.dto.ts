import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from './category.model';

export class CreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of a category',
  })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The category parent id',
    default: null,
  })
  parent?: Category;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The category discount amount',
    default: null,
  })
  discount: number;
}

export class UpdateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of a category',
  })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The category parent id',
    default: null,
  })
  parent?: Category;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The category discount amount',
    default: null,
  })
  discount: number;
}
