import { Component } from '@angular/core';
import {Game} from "../game";
import {GuessNumberService} from "../guess-number.service";
import {Router} from "@angular/router";
import {navigate} from "../Navigate";

@Component({
  selector: 'app-try-again',
  templateUrl: './try-again.component.html',
  styleUrls: ['./try-again.component.css']
})
export class TryAgainComponent  {
  number: Game;
  constructor(
    private quiz: GuessNumberService,
    private readonly router:Router) {
    this.number = quiz.number;
  }
  public check(userAnswer: string) {
    this.quiz.userAnswer = userAnswer;
    console.log('userAnswer=[' + userAnswer + ']');
    navigate(this.quiz.gradeQuiz(), this.router);
  }
}
