import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { ShoppinglistService } from "../shoppinglist.service";
import { ModalPage } from "../modal/modal.page";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(
    public shoppingListService: ShoppinglistService,
    public modalController: ModalController
  ) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  add(): void {}
}
