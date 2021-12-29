import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustumValidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:CustumValidatorDirective,
    multi:true

  }]
})
export class CustumValidatorDirective{
  @Input('appCustumValidator') not_use='';
  constructor() { }
  // validate(control: AbstractControl): ValidationErrors | null {
  //   return this.not_use?
  //   custumValidator(new RegExp(this.not_use,'i'))
  //   (control):null
  // }

}
function custumValidator() {
  throw new Error('Function not implemented.');
}

