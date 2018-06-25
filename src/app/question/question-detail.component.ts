import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html'
})

export class QuestionDetailComponent{
  question: Question = new Question(
    'Esta es una nueva pregunta sobre android',
    'Tengo una duda con una aplicación que estoy escribiendo',
    new Date,
    'devicon-android-plain'
  );
}
