import { Validator, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustumValidatorFunc]'
})
export class CustumValidatorFuncDirective {

  constructor() { }

}
export function custumValidator(nme:RegExp):ValidatorFn
   {
      return (control: AbstractControl):ValidationErrors|null=>{
        const forbid = nme.test(control.value);
        return forbid? {forbidden:{
          value:control.value
        }}:null;
      };
  }

