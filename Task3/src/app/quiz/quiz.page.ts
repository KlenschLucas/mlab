import { Component, OnInit } from "@angular/core";
import { QuizService } from "../quiz.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.page.html",
  styleUrls: ["./quiz.page.scss"],
})
export class QuizPage implements OnInit {
  answers: number[] = new Array(this.quizService.quiz.length);
  numberOfAnswers: number = 0;
  submit: boolean = false;
  marks: number;

  constructor(public quizService: QuizService, private router: Router) {}

  ngOnInit() {}

  submitQuiz(): void {
    this.marks = this.answers.reduce((sum, answer, index) => {
      return (sum += answer === this.quizService.quiz[index].answer ? 1 : 0);
    });
    if (this.marks / this.quizService.quiz.length > 0.8) {
      console.log("passed");
    } else {
      console.log("failed");
    }
  }

  setAnswer(questionIndex: number, answersIndex: number): void {
    if (!(this.answers[questionIndex] === 0 || !!this.answers[questionIndex])) {
      if (++this.numberOfAnswers === this.quizService.quiz.length) {
        this.submit = true;
      }
    }
    this.answers[questionIndex] = answersIndex;
  }
}
