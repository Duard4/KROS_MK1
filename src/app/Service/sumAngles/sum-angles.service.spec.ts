import { TestBed } from '@angular/core/testing';

import { SumAngles } from './sum-angles.service';
import { Angle } from 'src/app/my-form/Class/angle';

describe('SumAngles', () => {
    let service: SumAngles;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SumAngles);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('Сума кутів -10 11 13 і 12 14 59', () => {
        let y = "+2°3'46''";
        let angleL = [new Angle(10, 11, 13, "-"), new Angle(12, 14, 59, "+")]
        let s = service.anglesRes(angleL);
        expect(y).toBe(s);
    });
    it('Сума кутів +10 11 13 і -12 14 59', () => {
        let y = "-2°3'46''";
        let angleL = [new Angle(10, 11, 13, "+"), new Angle(12, 14, 59, "-")]
        let s = service.anglesRes(angleL);
        expect(y).toBe(s);
    });
    it('Сума кутів 10 51 13 і 12 14 0', () => {
        let y = "+23°5'13''";
        let angleL = [new Angle(10, 51, 13, "+"), new Angle(12, 14, 0, "+")]
        let s = service.anglesRes(angleL);
        expect(y).toBe(s);
    });
    it('Сума кутів -10 51 13 і -12 14 0', () => {
        let y = "-23°5'13''";
        let angleL = [new Angle(10, 51, 13, "-"), new Angle(12, 14, 0, "-")]
        let s = service.anglesRes(angleL);
        expect(y).toBe(s);
    });
});
