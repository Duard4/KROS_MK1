import { ValidatorFn, AbstractControl } from "@angular/forms";
import { ValidatorD } from "./Validator/validatorD.service";
import { ValidatorMS } from "./Validator/validatorMS.service";


export function dValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        let validator = new ValidatorD();
        let isValid = !control.value || validator.validate_degree(control.value);
        return isValid ? null : { date: true };
    };
}
export function msValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        let validator = new ValidatorMS();
        let isValid = !control.value || validator.validate_degree(control.value);
        return isValid ? null : { date: true };
    };
}