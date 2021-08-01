import { Module } from '@nestjs/common';
import { ItemClass } from './Interfaces/items.interface';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService, ItemClass]
})
export class ItemsModule {}
