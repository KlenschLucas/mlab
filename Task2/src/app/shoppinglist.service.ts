import { Injectable } from "@angular/core";
import { Item } from "./shoppinglist";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class ShoppinglistService {
  shoppingList: Item[] = [];

  constructor(private storage: Storage) {
    this.storage
      .get("list")
      .then((list) => {
        if (list) {
          this.shoppingList = JSON.parse(list);
        }
      })
      .catch((err) => console.error(err));
  }

  private saveToStorage(): void {
    this.storage.set("list", JSON.stringify(this.shoppingList));
  }

  add(title: string, amount: number): void {
    let list = new Item(this.shoppingList.length, title, amount);
    this.shoppingList.push(list);
    this.saveToStorage();
  }

  delete(id: number): void {
    if (this.shoppingList.length === 1) {
      this.shoppingList = [];
      return;
    }
    this.shoppingList.splice(id, 1);
    this.saveToStorage();
  }
}
