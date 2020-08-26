import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-quiz-results",
  templateUrl: "./quiz-results.page.html",
  styleUrls: ["./quiz-results.page.scss"],
})
export class QuizResultsPage implements OnInit {
  marks: number;
  constructor(private router: Router) {}

  ngOnInit() {
    this.marks = this.router.getCurrentNavigation().extras.state?.marks;
  }
}
