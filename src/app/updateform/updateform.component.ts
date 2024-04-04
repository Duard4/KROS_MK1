import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Angle } from '../my-form/Class/angle';
import { ValidatorD } from '../Service/Validator/validatorD.service';
import { ValidatorMS } from '../Service/Validator/validatorMS.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {
  @Input() angle!: Angle;
  @Input() show: boolean = true;
  @Output() angleChange: EventEmitter<Angle> = new EventEmitter<Angle>();
  @Output() showChange = new EventEmitter();
  constructor() { }

  validate_d(d: number): boolean {
    let validatorD = new ValidatorD();
    if (validatorD.validate_degree(d)) {
      return true;
    } else {
      return false;
    }
  }

  validate_ms(d: number): boolean {
    let validatorMS = new ValidatorMS();
    if (validatorMS.validate_degree(d)) {
      return true;
    } else {
      return false;
    }
  }

  save(d: any, m: any, s: any, p: any) {
    this.show = false;
    d = parseInt(d);
    m = parseInt(m);
    s = parseInt(s);
    console.log(m);
    if (!this.validate_d(d)) {
      throw Error("degree");
    }
    if (!this.validate_ms(m)) {
      throw Error("Minutes");
    }
    if (!this.validate_ms(s)) {
      throw Error("Seconds");
    }
    this.angle = new Angle(d, m, s, p);

    this.angleChange.emit(this.angle);
    this.showChange.emit(this.show);
  }

  ngOnInit() { }

}
