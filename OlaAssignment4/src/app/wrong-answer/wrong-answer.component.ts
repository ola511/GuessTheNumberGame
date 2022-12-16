import { Component } from '@angular/core';
import {Game} from "../game";
import {GuessNumberService} from "../guess-number.service";


@Component({
  selector: 'app-wrong-answer',
  templateUrl: './wrong-answer.component.html',
  styleUrls: ['./wrong-answer.component.css']
})
export class WrongAnswerComponent  {

  number: Game;
  userAnswer: string;
  doc: string;
  gap : string;
  constructor(quiz: GuessNumberService) {
    this.number = quiz.number;
    this.userAnswer = quiz.userAnswer;
    this.doc = quiz.doc;
    this.gap = quiz.gap;
  }



}
