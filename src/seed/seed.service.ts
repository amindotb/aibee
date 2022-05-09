import { Injectable } from '@nestjs/common';
import { ProductService } from '../product/product.service';
import { CategoryService } from '../category/category.service';

const rowData =
  '{"categories":[{"name":"main","parent":null,"discount":1},{"name":"digital","parent":0,"discount":1.5},{"name":"laptop","parent":1,"discount":2.5},{"name":"gaming","parent":2,"discount":3.5},{"name":"economy","parent":3,"discount":4.5},{"name":"book","parent":0,"discount":1.5}],"products":[{"name":"True North","category":6},{"name":"504 English words","category":6},{"name":"Asus Tuf F15","category":4},{"name":"Dell 5600","category":5},{"name":"MSI 2290","category":5}]}';

@Injectable()
export class Seed {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
  ) {}

  async seeding(): Promise<void> {
    const data = JSON.parse(rowData);
    await this.seedCategory(data.categories);
    await this.seedProduct(data.products);
  }

  async seedCategory(categories): Promise<void> {
    const createdList = [];
    for (const category of categories) {
      const result = await this.categoryService.create({
        name: category.name,
        discount: category.discount,
        parent:
          category.parent === null ? null : createdList[category.parent].id,
      });
      createdList.push(result);
    }
  }

  async seedProduct(products): Promise<void> {
    for (const product of products) {
      await this.productService.create({
        name: product.name,
        category: product.category,
      });
    }
  }
}
