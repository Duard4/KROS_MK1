import { TestBed } from '@angular/core/testing';

import { ValidatorMS } from './validatorMS.service';

describe('ValidatorMSService', () => {
    let service: ValidatorMS;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ValidatorMS);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('Check degree -1 => false', () => {
        let s = service.validate_degree(-1);
        expect(s).toBe(false);
    });
    
    it('Check degree 0 => true', () => {
        let s = service.validate_degree(0);
        expect(s).toBe(true);
    });
    it('Check degree 60 => false', () => {
        let s = service.validate_degree(60);
        expect(s).toBe(false);
    });
    it('Check degree 33 => true', () => {
        let s = service.validate_degree(33);
        expect(s).toBe(true);
    });

});
