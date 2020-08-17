import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ShoppinglistService } from "../shoppinglist.service";

@Component({
  selector: "modal",
  templateUrl: "modal.page.html",
  styleUrls: ["./modal.css"],
})
export class ModalPage {
  title: string = "";
  amount: number = 1;

  constructor(
    private modalController: ModalController,
    private shoppinglistService: ShoppinglistService
  ) {}

  add(): void {
    this.shoppinglistService.add(this.title, this.amount);
    this.dismiss();
    console.log("add");
  }

  setTitle(title: string): void {
    this.title = title;
  }

  setAmount(amount: string): void {
    this.amount = +amount;
  }

  dismiss(): void {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
