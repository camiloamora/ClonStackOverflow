import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { Http, Headers, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import urljoin from 'url-join';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Answer } from '../answer/answer-model';

@Injectable()
  export class QuestionService{

    private questionsUrl: string;

    constructor(private http: Http){
      this.questionsUrl = urljoin(environment.apiUrl, 'questions');
    }

    getQuestions(): Promise<void | Question[]> {
      return this.http.get(this.questionsUrl)
        .toPromise()
        .then(response => response.json() as Question[])
        .catch(this.handleError);
    }

    getQuestionId(id): Promise<void | Question>{
      const url= urljoin(this.questionsUrl, id);
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Question)
        .catch(this.handleError);
    }

    addQuestion(question: Question){
      const body = JSON.stringify(question);
      const headers = new Headers({ 'Content-Type': 'application/json' });

      return this.http.post(this.questionsUrl, body,{ headers })
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }

    addAnswer(answer: Answer){
      const a = {
        description: answer.description,
        question: {
          _id: answer.question._id
        }
      };
      //console.log(answer);
      //const body = JSON.stringify(answer);
      const body = JSON.stringify(a);
      console.log(answer.question._id.toString());
      const headers = new Headers({ 'Content-Type': 'application/json' });
      // /api/questions/:id/answers
      const idString = answer.question._id.toString();
      const url = urljoin(this.questionsUrl, idString, 'answers');
      console.log(url);
      return this.http.post(url, body,{ headers })
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }

    handleError(error: any){
      const errorMessage = error.message ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.log(errorMessage);
    }
  }
