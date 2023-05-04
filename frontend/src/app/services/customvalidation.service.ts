import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl, FormGroup } from '@angular/forms'

export interface ReturnType {
    [key: string]: boolean
}

@Injectable({
    providedIn: "root",
  })

export class CustomValidationService {
    constructor(){}

    /** Checking if file is empty or not */
    
    requiredValidator(): ValidatorFn {
      return (control: AbstractControl): ReturnType | null => {
          if (control.value === undefined || control.value === null) {
              return {
                  required: true
              };
          }
          return null;
      };
  }

    /** Validating file type by the types */

    imageTypeValidator(allowedTypes: string): ValidatorFn {
        return (control: AbstractControl): ReturnType | null => {
          if (control.value !== undefined && control.value !== null) {
            const file = control.value;
            console.log(file)
            const extension = file.split('.').pop()
            console.log({extension})
            const allowed = allowedTypes.replace(/\s+/g, "").split(",");
            console.log(allowed);
            if (!allowed.includes(extension)) {
                console.log('invalid...')
              return {
                imageType: true,
              };
            }
          }
          return null;
        };
      }

      /** Validating the file size  */

    fileSizeValidator(maxSize: number): ValidatorFn {
         return (control: AbstractControl): ReturnType | null => {
            if(control.value !== undefined && control.value !== null) {
                const file = control.value
                const size = file.size

                if( size > maxSize) {
                    return {
                        maxSize: true
                    }
                }else{
                    return null
                }
            }else{
                return null
            }
         }
    }
}
