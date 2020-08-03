import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnDestroy {

  customerForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    console.log("Customer Details Component initialized.");

    // build your form group
    this.customerForm = this._formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
      age: [null, [this.minimumAgeValidator, this.numberValidator, Validators.max(50)]],
    });

    // change of field detection
    this.customerForm.get('name').valueChanges.subscribe(
      value => console.log("name changed to: ", value)
    );

  }

  ngOnDestroy(): void {
    console.log("Customer Details component goes out of scope.");
  }

  onSubmit(): void {
    console.log("customer: ", this.customerForm.value);
  }

  minimumAgeValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if (control.value < 18) {
      return {
        invalidAge: true,
      };
    } else {
      return null;
    }
  }

  numberValidator(control: AbstractControl): {[key: string]: boolean} | null {
    if (isNaN(control.value)) {
      return {
        isNotANumber: true,
      };
    } else {
      return null;
    }
  }

}
