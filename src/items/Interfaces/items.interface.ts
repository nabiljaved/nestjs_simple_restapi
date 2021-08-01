export interface Item {

    id?:number,
    name:string,
    price:number
    
}

export class ItemClass implements Item{
    
    id?:number;
    name:string;
    price:number;
    items:Array<Item>

    constructor(id:number, name:string, price:number){
        this.id = id; 
        this.name = name; 
        this.price = price
        this.items = [] 
    }

    setItem(item:Item):string{
        
        this.items.push(item)
        //console.log(this.items)
        return 'item has been added suuccessfully'
    }

    getsItems():Item[]{
        return this.items
    }

    deleteItem(id:number):Item[]{  
        this.items = this.items.filter(item => item.id != id)
        return this.items
    }

    
    updateItem(item:Item):Item{
        let index = this.items.findIndex((obj) => obj.id === item.id)
        let newItem = this.items[index]
        newItem.id = item.id
        newItem.name = item.name
        newItem.price = item.price
        
        return newItem
    }


}