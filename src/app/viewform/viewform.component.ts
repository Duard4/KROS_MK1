import { Component, OnInit } from '@angular/core';
import { Angle } from '../my-form/Class/angle';
import { SumAngles } from '../Service/sumAngles/sum-angles.service';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent  implements OnInit {
  show_update: boolean = false;
  angles: Angle[] = [];
  res: string = '';
  constructor(private sumAngles: SumAngles,) { }

  ngOnInit() {}

  addAngle(event: any){
    if (event as Angle){
      let angle: Angle = event;
      this.angles.push(angle);
      console.log(this.angles);
      this.sum();

    }else{
      throw new Error("Error of type");
    }
  }

  update() {this.show_update = true;}

  delete(i:any) {
    this.angles.splice(i, 1);
    this.sum();
  }

  showUp(event: any){
    if(typeof event === "boolean"){
      this.show_update = event;
    }else{
      throw new Error("Error of type");
    }
  }
  sum() {
    this.res = this.sumAngles.anglesRes(this.angles);
  }
  update_save(event:any, i:number){
    if (event as Angle){
      this.angles[i] = event;
      this.sum();
    }else{
      throw new Error("Error of type");
    }
  }

}
