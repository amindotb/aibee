import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of a product',
  })
  name: string;

  @IsNumber()
  @ApiProperty({
    description: 'The category id of a product',
    default: null,
  })
  category: number;
}

export class UpdateDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of a product',
  })
  name: string;

  @IsNumber()
  @ApiProperty({
    description: 'The category id of a product',
    default: null,
  })
  category: number;
}

export class DiscountDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The id of a product',
  })
  id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The price of a order',
  })
  price: number;
}
