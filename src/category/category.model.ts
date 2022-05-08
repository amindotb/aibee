import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @ManyToOne(() => Category)
  @JoinColumn()
  parent?: Category;

  @Column({ default: 0 })
  discount: number;
}
