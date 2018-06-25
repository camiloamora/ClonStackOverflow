import { Component, Input} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-asnwer-form',
  templateUrl: './answer-form.component.html'
})

export class AsnwerFormComponent{
  onSubmit(form: NgForm){
    console.log(form.value.description);
  };
}
