import { Injectable } from "@angular/core";
import { NativeStorage } from "@ionic-native/native-storage/ngx";

import { ShoppingList, Item } from "./shopping-list";

@Injectable({
  providedIn: "root",
})
export class ShoppinglistService {
  shoppingLists: ShoppingList[] = [];

  constructor(private nativeStorage: NativeStorage) {}

  ngOnInit() {
    this.nativeStorage.getItem("lists").then(
      (data) => console.log(data),
      (error) => console.error(error)
    );
  }

  // createList()

  createItem(id: number, title: string, amount: number): void {
    let item = new Item(title, amount);
    this.shoppingLists[id].items.push(item);
  }

  deleteItem(id: number, index: number): void {
    this.shoppingLists[id].items.splice(index, 0);
  }

  private setItemsInStorage(): void {
    this.nativeStorage.setItem("lists", JSON.stringify(ShoppingList)).then(
      () => console.log("Stored item!"),
      (error) => console.error("Error storing item", error)
    );
  }
}
