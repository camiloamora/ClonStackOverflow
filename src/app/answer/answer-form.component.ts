import { Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer-model';
import { Question } from '../question/question.model';
import { User } from '../auth/user.model';
import { QuestionService} from '../question/question.service';

@Component({
  selector: 'app-asnwer-form',
  templateUrl: './answer-form.component.html',
  styles: [`
  form{
    margin-top:20px;
  }
  `],
  providers:[QuestionService]
})

export class AsnwerFormComponent{
  @Input() question: Question;

  constructor(private questionService: QuestionService){

  }

  onSubmit(form: NgForm){
    // console.log(form.value.description);
    const answer = new Answer(
      form.value.description,
      this.question
      // new Date(),
      // new User('Paula', 'Becerra', null, null)
    );
    //console.log(answer);
    this.questionService
      .addAnswer(answer)
      .subscribe(
        a => this.question.answers.unshift(a),
        error => console.log(error)
      );
    // this.question.answers.unshift(answer);
    form.reset();
  };
}
