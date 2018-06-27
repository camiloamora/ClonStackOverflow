import {Component, OnInit} from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';

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

   .add-question{
     position: fixed;
     bottom:60px;
     right:30px;,
     font-size: 30px;
   }
  `
  ],
  providers: [QuestionService]
})




export class QuestionListComponent implements OnInit{

  constructor(private questionService: QuestionService){}

  //questions: Question[] = new Array(10).fill(q);
  questions: Question[];
  loading = true;

  ngOnInit() {
    this.questionService
      .getQuestions()
      .then((questions: Question[]) => {
        this.questions = questions;
        this.loading = false;
      });
  }
}
