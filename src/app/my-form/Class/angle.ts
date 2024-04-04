export class Angle {
    degrees: number = 0;
    minutes: number = 0;
    seconds: number = 0;
    polus: string = "+";

    constructor(degree: number, minute: number, second: number, polus: string) {
        if (degree) {
            this.degrees = degree;
        }
        if (minute) {
            this.minutes = minute;
        }
        if (second) {
            this.seconds = second;
        }
        this.polus = polus;
    }

}