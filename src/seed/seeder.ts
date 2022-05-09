import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { Seed } from './seed.service';

async function bootstrap() {
  NestFactory.createApplicationContext(SeedModule)
    .then((appContext) => {
      const seeder = appContext.get(Seed);
      seeder
        .seeding()
        .then(() => {
          console.log('Seeding complete!');
        })
        .catch((error) => {
          console.error('Seeding failed!');
          throw error;
        })
        .finally(() => appContext.close());
    })
    .catch((error) => {
      throw error;
    });
}
bootstrap();
