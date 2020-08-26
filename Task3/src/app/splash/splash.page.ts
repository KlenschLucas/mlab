import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import Typed from "typed.js";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.page.html",
  styleUrls: ["./splash.page.scss"],
})
export class SplashPage implements OnInit {
  typed: any;
  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {
    this.storage.set("splash", "true");
    var options = {
      strings: ["Test your Covid-19 knowledge!"],
      typeSpeed: 100,
    };

    this.typed = new Typed("#typed", options);
    setTimeout(() => this.router.navigateByUrl("/login"), 4500);
  }
}
