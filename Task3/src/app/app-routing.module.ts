import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "splash",
    pathMatch: "full",
  },
  {
    path: "quiz",
    loadChildren: () =>
      import("./quiz/quiz.module").then((m) => m.QuizPageModule),
  },
  {
    path: "results",
    loadChildren: () =>
      import("./results/results.module").then((m) => m.ResultsPageModule),
  },
  {
    path: "quiz-results",
    loadChildren: () =>
      import("./quiz-results/quiz-results.module").then(
        (m) => m.QuizResultsPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "splash",
    loadChildren: () =>
      import("./splash/splash.module").then((m) => m.SplashPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
