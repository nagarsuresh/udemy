import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
    myForm: FormGroup;
    fetching: Boolean = false;  

  genders = [
    'male',
    'female'
  ];

  constructor(private formBuilder: FormBuilder) {
    // this.myForm = new FormGroup({
    //   'userData': new FormGroup({
    //     'username': new FormControl('Max', Validators.required),
    //     'email': new FormControl('', [
    //       Validators.required,
    //       Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    //     ])
    //   }),
    //   'password': new FormControl('', Validators.required),
    //   'gender': new FormControl('male'),
    //   'hobbies': new FormArray([
    //     new FormControl('Cooking', Validators.required)
    //   ])
    // });

    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['Max', [Validators.required], this.userAsyncValidator],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]]
      }),
      'password': ['', Validators.required],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required, this.asyncExampleValidator]
      ])
    });

    this.myForm.getError

    this.myForm.statusChanges.subscribe(
        (data: any) => {
            console.log(data);
            this.fetching = (data === 'PENDING');
        }
    );
  }

  onAddHobby() {
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required, this.asyncExampleValidator));
    debugger;
  }

  onSubmit() {
    console.log(this.myForm);
  }

userAsyncValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        console.log("Hitting Server to validate username!!!");
        setTimeout(() => {
          if (control.value === 'Suresh') {
            resolve({'usernameTaken': true});
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        console.log("Hitting Server to validate!!!");
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({'usernameTaken': true});
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }

}
