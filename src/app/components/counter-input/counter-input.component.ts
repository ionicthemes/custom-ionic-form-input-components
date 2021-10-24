import { Component, forwardRef, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

// this is a custom validator fot the CounterInputComponent
export function counterRangeValidator(minValue: number, maxValue: number) {
  return (control: FormControl) => {
    const err = {
      rangeError: {
        given: control.value,
        min: minValue || 0,
        max: maxValue || 10
      }
    };

    return (control.value > +maxValue || control.value < +minValue) ? err : null;
  };
}

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CounterInputComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => CounterInputComponent), multi: true }
  ],
  encapsulation: ViewEncapsulation.None
})
export class CounterInputComponent implements ControlValueAccessor, OnChanges {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('counterValue') _counterValue = 0;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('max') counterRangeMax: number;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('min') counterRangeMin: number;

  propagateChange: any = () => {}; // Noop function
  validateFn: any = () => {}; // Noop function

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(val);
  }

  ngOnChanges(inputs) {
    if (inputs.counterRangeMax || inputs.counterRangeMin) {
      this.validateFn = counterRangeValidator(this.counterRangeMin, this.counterRangeMax);
    }
  }

  writeValue(value: number) {
    if (value) {
      this.counterValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  increase() {
    this.counterValue++;
  }

  decrease() {
    this.counterValue--;
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }
}
