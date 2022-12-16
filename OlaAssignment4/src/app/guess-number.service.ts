import { Injectable } from '@angular/core';
import {Grade} from "./grade";
import {Game} from "./game"
@Injectable({
  providedIn: 'root'
})
export class GuessNumberService {
  number: Game;
  userAnswer: string;
  counter: number;
  doc: string;
  gap : string;
  constructor() {
    this.number = new Game();
    this.userAnswer ="";
    this.counter = 0;
    this.doc = "";
    this.gap = "";
  }
  reset() {
    this.number.reset();
    this.userAnswer = '';
  }
  gradeQuiz(): Grade {

    if (this.userAnswer === '') {
      this.userAnswer = 'empty';
      return Grade.InputError;
    }
    const parsed = parseFloat(this.userAnswer);
    if (isNaN(parsed)) {
      return Grade.InputError;
    } else {
      if (parsed === this.number.answer) {
        return Grade.RightAnswer;
      } else {
        if(parseFloat(this.userAnswer) < this.number.answer){
          this.gap ="larger";
          console.log("is small")
          console.log("WrongAnswer" ,this.counter++)
          return Grade.WrongAnswer;

        }else{
          console.log("is big")
         // document.getElementById("big").innerHTML
          this.gap ="smaller";
            console.log("WrongAnswer" ,this.counter++)
          return Grade.WrongAnswer
        }

               }
      }


    }
}
