import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Game} from "../game";
import {GuessNumberService} from "../guess-number.service";
import {navigate} from "../Navigate";

@Component({
  selector: 'app-new-number',
  templateUrl: './new-number.component.html',
  styleUrls: ['./new-number.component.css']
})
export class NewNumberComponent  {
  number: Game;
  counter:number;
  constructor(
    private quiz: GuessNumberService,
    private readonly router: Router
  ) {
    this.number = quiz.number;
    this.number.reset();
    this.counter = 0;
  }

  public check(userAnswer: string) {
    this.quiz.userAnswer = userAnswer;
    console.log('userAnswer=[' + userAnswer + ']');
    navigate(this.quiz.gradeQuiz(), this.router);
  }

}
