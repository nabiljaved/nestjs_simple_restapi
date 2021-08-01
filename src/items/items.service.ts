import { Injectable } from '@nestjs/common';
import {Item, ItemClass} from './Interfaces/items.interface'

@Injectable()
export class ItemsService {


    constructor(private readonly items: ItemClass){}

    getProducts():Item[]{
        return this.items.getsItems()
    }

    setProduct(item:Item):string{
        return this.items.setItem(item)
    }

    updateProduct(item:Item):Item{
        return this.items.updateItem(item)
    }
    
    patchProduct(item:Item):Item{
        return this.items.patchItem(item)
    }


    deleteProduct(id:number):Item[]{
        return this.items.deleteItem(id)
    }



}
