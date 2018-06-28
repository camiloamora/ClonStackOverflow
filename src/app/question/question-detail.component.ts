import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
  providers: [QuestionService]
})

export class QuestionDetailComponent implements OnInit, OnDestroy{
  // question: Question = new Question(
  //   'Esta es una nueva pregunta sobre android',
  //   'Tengo una duda con una aplicación que estoy escribiendo',
  //   new Date,
  //   'devicon-android-plain'
  // );
  question?: Question;
  loading = true;
  sub: any;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.questionService
      .getQuestionId(params.id)
      .then((question: Question) =>{
        this.question = question;
        this.loading = false;
      });
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
