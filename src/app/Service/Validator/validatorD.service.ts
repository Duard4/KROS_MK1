import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorD {

  validate_degree(value: number){
    if(value>=0 && value<=359 || value == null){
      return true;
    }
    else{
      return false;
    }
  }
  
  constructor() { }
}
