import {Router} from '@angular/router';
import {Grade} from './grade';

export function navigate(grade: Grade, router: Router) {
  switch (grade) {
    // case Grade.Counter:
    //   router.navigate(['/', 'right-answer']).then(() => console.log(Grade.Counter));
    //   break;
    case Grade.RightAnswer: {
      router.navigate(['/', 'right-answer']).then(() => console.log('right answer'));
      break;
    }

    case Grade.WrongAnswer: {
      router.navigate(['/', 'wrong-answer']).then(() => console.log('wrong answer '));

      break;
    }
    case Grade.InputError: {
      router.navigate(['/', 'input-error']).then(() => console.log('input error'));
      break;
    }
    case Grade.AnswerBig: {
      router.navigate(['/', 'wrong-answer']).then(() => console.log('wrong answer '));

      break;
    }
    case Grade.AnswerSmall: {
      router.navigate(['/', 'wrong-answer']).then(() => console.log('wrong answer '));

      break;
    }
  }


}
