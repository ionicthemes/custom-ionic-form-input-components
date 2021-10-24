import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { RatingInputComponent } from './rating-input/rating-input.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    ShowHidePasswordComponent,
    CounterInputComponent,
    RatingInputComponent
  ],
  exports: [
    ShowHidePasswordComponent,
    CounterInputComponent,
    RatingInputComponent
  ]
})
export class ComponentsModule {}
