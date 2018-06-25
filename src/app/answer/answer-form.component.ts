import { Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-asnwer-form',
  templateUrl: './answer-form.component.html',
  styles: [`
  form{
    display:flex;
    flex-direction:column;
    width:90%;
    margin:40px auto;
    margin-top:20px;
  }
  `]
})

export class AsnwerFormComponent{
  onSubmit(form: NgForm){
    console.log(form.value.description);
  };
}
