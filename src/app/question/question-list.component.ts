import {Component} from '@angular/core';
import { Question } from './question.model';

const q = new Question(
 '¿Cómo reutilizo un componente en android',
 'Esta es mi pregunta',
  new Date(),
  'devicon-apple-original'
);

@Component({
  selector:'app-question-list',
  templateUrl: './question-list.component.html',
  styles:[`
   i{
      font-size: 30px;
   }

   i.help{
      width: 30px !important;
      heigth: 30px !important;
      padding: 0 !important;
      font-size: 30px !important;
   }
  `
  ]
})

export class QuestionListComponent{
  questions: Question[] = new Array(10).fill(q);
}
