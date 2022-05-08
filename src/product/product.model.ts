import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../category/category.model';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @ManyToOne(() => Category)
  @JoinColumn()
  category: Category;
}
