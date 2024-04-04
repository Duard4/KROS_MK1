import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dValidator, msValidator } from '../Service/myValidator';
import { Angle } from './Class/angle';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent  implements OnInit {
  angleForm!: FormGroup;
  angle! : Angle;
  @Output() angleAdd: EventEmitter<Angle> = new EventEmitter<Angle>();

  constructor(private fb:FormBuilder) { 
    this.angleForm = this.fb.group({
      degrees: ['', [dValidator()]],
      minutes: ['', [msValidator()]],
      seconds: ['', [msValidator()]],
      polus: ['', [Validators.required]]
    });
  }

  onSubmit(){
    let degrees = this.angleForm.value.degrees;
    let minutes = this.angleForm.value.minutes;
    let seconds = this.angleForm.value.seconds;
    let polus = this.angleForm.value.polus;
    if(degrees || minutes || seconds) {
      this.angle = new Angle(degrees, minutes, seconds, polus);
      console.log(this.angle);
      this.angleAdd.emit(this.angle);
      console.log("submit");
    } 
    else{
      console.log("Invalid angle");
    }
  }

  ngOnInit() {}

}
