import { Component } from "@angular/core";
import { ShoppingList } from "../shopping-list";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  shoppingList: ShoppingList[];

  constructor() {}

  ngOnInit(): void {}
}
