import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.model';
import { CreateDto } from './category.dto';
import { Messages } from '../shared/messages';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>,
  ) {}

  async list(page: number): Promise<Category[]> {
    page = page ?? 1;
    const take = 10;
    const skip = (page - 1) * take;
    return this.repository.find({
      take: 10,
      skip,
    });
  }

  async find(id: number): Promise<Category> {
    const result = await this.repository.findOne({
      where: {
        id,
      },
      relations: ['parent'],
    });

    if (!result) {
      throw new NotFoundException(Messages.NOT_FOUND);
    }

    return result;
  }

  async create(body: CreateDto): Promise<Category> {
    let category: Category = await this.repository.findOne({
      where: {
        name: body.name,
      },
    });

    if (category) {
      throw new ConflictException(Messages.ALREADY_EXISTS);
    }

    category = await this.repository.findOne({
      where: {
        parent: body.parent,
      },
    });

    if (!category) {
      throw new ConflictException('Parent' + Messages.NOT_FOUND);
    }

    category = new Category();
    category = {
      ...body,
    };

    return this.repository.save(category);
  }

  async update(id: number, body: CreateDto): Promise<Category> {
    if (body.parent) {
      const category: Category = await this.repository.findOne({
        where: {
          parent: body.parent,
        },
      });
      if (!category) {
        throw new NotFoundException('Parent' + Messages.NOT_FOUND);
      }
    }

    const category = await this.repository.findOne({
      where: {
        id,
      },
    });

    return this.repository.save({ ...category, ...body });
  }

  async remove(id: number): Promise<any> {
    const result = await this.repository.delete(id);
    if (result.affected > 0) {
      return { affected: result.affected };
    } else {
      throw new NotFoundException(Messages.NOT_FOUND);
    }
  }

  async deep(id: number, maxDigging = 0) {
    if (maxDigging > 0) {
      const category = await this.find(id);
      if (category.discount > 0) {
        return category.discount;
      } else if (category.parent) {
        return this.deep(category.parent.id, maxDigging - 1);
      }
    } else {
      return -1;
    }
  }
}
