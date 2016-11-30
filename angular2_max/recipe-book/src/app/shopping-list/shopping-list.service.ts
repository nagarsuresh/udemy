import { Ingredient } from "../shared";

export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }

  updateItem(oldItem: Ingredient, newItem: Ingredient) {
    var index: number = this.items.indexOf(oldItem);
    this.items[index] = newItem;
  }

  deleteItem(item: Ingredient) {
    var index: number = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}
