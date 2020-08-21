import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

import { QuizResults } from "./quiz-results";
import { QuizQuestions } from "./quiz-questions";

import questions from "./questions";

@Injectable({
  providedIn: "root",
})
export class QuizService {
  quiz: QuizQuestions[] = questions;
  results: QuizResults[] = [];

  constructor(private storage: Storage) {
    storage
      .get("results")
      .then((value: string) => {
        if (value) {
          this.results = JSON.parse(value);
        }
      })
      .catch((err: string) => console.error("error", err));
  }

  save(): void {
    this.storage.set("results", JSON.stringify(this.results));
  }
}
