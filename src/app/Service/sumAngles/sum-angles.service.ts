import { Injectable, Optional } from '@angular/core';
import { Angle } from 'src/app/my-form/Class/angle';

@Injectable({
    providedIn: 'root'
})
export class SumAngles {
    anglesRes(anglesList:Angle[]):string {
        let sumS = 0, res = "";
        anglesList.forEach(x => {
            let elS = x.degrees * 3600 + x.minutes * 60 + x.seconds;
            if (x.polus == "+") {
                sumS += elS;
            }
            else {
                sumS -= elS;
            }
        })
        let sumSec = Math.abs(sumS);
        let sumD = Math.abs(Math.floor(sumSec / 3600)), sumM = Math.abs(Math.floor(sumSec / 60) % 60);
        if (sumS > 0) {
            res = `+${sumD}°${sumM}'${Math.abs(sumSec % 60)}''`;
        }
        else if (sumS == 0) {
            res = `0°0'0''`;
        }
        else {
            res = `-${sumD}°${sumM}'${Math.abs(sumSec % 60)}''`;
        }
        return res;
    }
}