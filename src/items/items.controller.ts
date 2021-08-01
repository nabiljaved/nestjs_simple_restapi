import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Item } from './Interfaces/items.interface';

import { ItemsService } from './items.service';


@Controller('items')
export class ItemsController {

    constructor(private readonly itemSerice: ItemsService){}

    @Get()
    getItems():Item[]{
        return this.itemSerice.getProducts()
    }

    @Post()
    postItem(@Body() item: Item):string{
        return this.itemSerice.setProduct(item)
    }

    @Put('update')
    updateProduct(@Body() item: Item):Item{
        return this.itemSerice.updateProduct(item)
    }

    @Patch('patch')
    patchProduct(@Body() item: Item):Item{
        return this.itemSerice.patchProduct(item)
    }

    @Delete(':id')
    deleteProduct(@Param('id') id ): Item[] {
        return this.itemSerice.deleteProduct(id)
    }

}
