import {Grade} from "./grade";

export class Game {
  a: number = 1;
  // b: number = 1;

  answer: number = 1;
  constructor() {
    this.reset();
  }
  public reset() {
    this.a = Math.floor(Math.random() * 10) + 1
    // this.b = 1 + Math.floor(9 * Math.random());
    this.answer = this.a;
    if(this.answer > this.a){
     return Grade.AnswerBig;
  }else{
      return Grade.AnswerSmall;
    }
  }
}
