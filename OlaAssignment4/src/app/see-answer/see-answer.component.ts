import { Component } from '@angular/core';
import {Game} from "../game";
import {GuessNumberService} from "../guess-number.service";

@Component({
  selector: 'app-see-answer',
  templateUrl: './see-answer.component.html',
  styleUrls: ['./see-answer.component.css']
})
export class SeeAnswerComponent  {
  number: Game;
  constructor(quiz: GuessNumberService) {
    this.number = quiz.number;
  }


}
