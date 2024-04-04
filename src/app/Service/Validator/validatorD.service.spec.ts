import { TestBed } from '@angular/core/testing';

import { ValidatorD } from './validatorD.service';

describe('ValidatorDService', () => {
    let service: ValidatorD;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ValidatorD);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('Check degree -1 => false', () => {
        let s = service.validate_degree(-1);
        expect(s).toBe(false);
    });
    it('Check degree 60 => true', () => {
        let s = service.validate_degree(60);
        expect(s).toBe(true);
    });
    it('Check degree 0 => true', () => {
        let s = service.validate_degree(0);
        expect(s).toBe(true);
    });
    it('Check degree 360 => false', () => {
        let s = service.validate_degree(360);
        expect(s).toBe(false);
    });

});
