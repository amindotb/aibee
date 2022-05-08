import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.model';
import { CreateDto } from './product.dto';
import { Messages } from '../shared/messages';
import { CategoryService } from '../category/category.service';

const MAX_DIGGING = 3;

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>,
    private readonly categoryService: CategoryService,
  ) {}

  async list(page: number): Promise<Product[]> {
    page = page ?? 1;
    const take = 10;
    const skip = (page - 1) * take;
    return this.repository.find({
      where: {},
      take: 10,
      skip,
    });
  }

  async find(id: number): Promise<Product> {
    const result = await this.repository.findOne({
      where: {
        id,
      },
      relations: ['category'],
    });

    if (!result) {
      throw new NotFoundException(Messages.NOT_FOUND);
    }

    return result;
  }

  async create(body: CreateDto): Promise<Product> {
    let product: Product = await this.repository.findOne({
      where: {
        name: body.name,
      },
    });

    if (product) {
      throw new ConflictException(Messages.ALREADY_EXISTS);
    }

    const category = await this.categoryService.find(body.category);

    product = new Product();

    product = {
      name: body.name,
      category,
    };

    return this.repository.save(product);
  }

  async update(id: number, body: CreateDto): Promise<Product> {
    let category = null;
    if (body.category) {
      category = await this.categoryService.find(body.category);
    }

    const product = await this.repository.findOne({
      where: {
        id,
      },
    });

    return this.repository.save({ ...product, name: body.name, category });
  }

  async remove(id: number): Promise<any> {
    const result = await this.repository.delete(id);
    if (result.affected > 0) {
      return { affected: result.affected };
    } else {
      throw new NotFoundException(Messages.NOT_FOUND);
    }
  }

  async discount(id: number): Promise<any> {
    let discount = -1;
    const product = await this.repository.findOne({
      where: {
        id,
      },
      relations: ['category', 'category.parent'],
    });

    if (!product) {
      throw new NotFoundException(Messages.NOT_FOUND);
    }

    if (product.category.discount > 0) {
      discount = product.category.discount;
    } else if (product.category.parent) {
      discount = await this.categoryService.deep(
        product.category.parent.id,
        MAX_DIGGING,
      );
    }

    return { discount };
  }
}
