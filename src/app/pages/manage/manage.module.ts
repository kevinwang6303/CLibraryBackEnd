import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { ThemeModule } from '@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ManageRoutingModule,
    ThemeModule
  ],
  declarations: [ManageComponent]
})
export class ManageModule { }
