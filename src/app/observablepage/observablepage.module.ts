import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservablepagePageRoutingModule } from './observablepage-routing.module';

import { ObservablepagePage } from './observablepage.page';
import { MyFormComponent } from '../my-form/my-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObservablepagePageRoutingModule
  ],
  declarations: [ObservablepagePage]
})
export class ObservablepagePageModule {}
