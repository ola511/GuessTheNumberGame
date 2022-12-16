import { Component } from '@angular/core';
import {GuessNumberService} from "../guess-number.service";
import {Game} from "../game";

@Component({
  selector: 'app-right-answer',
  templateUrl: './right-answer.component.html',
  styleUrls: ['./right-answer.component.css']
})
export class RightAnswerComponent {
  number: Game;
  userAnswer: string;
  counter: number;
  constructor(quiz: GuessNumberService) {
    this.number = quiz.number;
    this.userAnswer = quiz.userAnswer;
    this.counter =quiz.counter;
  }



}
