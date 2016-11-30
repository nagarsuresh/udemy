import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from "../shared";


@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: 'shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit, OnChanges {

  @Input() item: Ingredient = null;
  @Output() cleared: EventEmitter<any> = new EventEmitter<any>();
  isAdd: boolean = true;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    if (changes.item.currentValue == null) {
      this.item = new Ingredient(null, null);
    } else {
      this.isAdd = false;
    }
  }


  onSubmit(form: NgForm): void {
    var ingredient: Ingredient = new Ingredient(form.value.name, form.value.amount);
    if (this.isAdd) {
      this.sls.addItem(ingredient);
      form.resetForm();
    } else {
      this.sls.updateItem(this.item, ingredient);
      this.onClear();
    }
  }

  onClear(): void {
    this.cleared.emit(null);
    this.isAdd = true;
  }

  onDelete(): void {
    this.sls.deleteItem(this.item);
    this.onClear();
  }




}
