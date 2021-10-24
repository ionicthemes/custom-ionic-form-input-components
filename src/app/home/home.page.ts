import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ratingForm: FormGroup;
  counterForm: FormGroup;
  passwordForm: FormGroup;

  constructor() {
    this.ratingForm = new FormGroup({
      rate: new FormControl(2.5),
      rate2: new FormControl(1.5),
      rate3: new FormControl()
    });

    this.counterForm = new FormGroup({
      counter: new FormControl(5),
      counter2: new FormControl(2)
    });

    this.passwordForm = new FormGroup({
      password: new FormControl(''),
      password2: new FormControl('1234'),
    });
  }

}
