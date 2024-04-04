import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorMS {

  validate_degree(value: number){
      if(value>=0 && value<=59 || value == null){
        return true;
      }
      else{
        return false;
      }
    }
    
  
  constructor() { }
}
