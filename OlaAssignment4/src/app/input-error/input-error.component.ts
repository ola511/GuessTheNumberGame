import { Component } from '@angular/core';
import {GuessNumberService} from "../guess-number.service";
import {Game} from "../game";

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.css']
})
export class InputErrorComponent  {
  number : Game;
  userAnswer: string;
  constructor(quiz: GuessNumberService) {
    this.number = quiz.number;
    this.userAnswer = quiz.userAnswer;
  }



}
