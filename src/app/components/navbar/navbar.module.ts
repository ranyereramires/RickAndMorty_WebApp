import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbareRoutingModule } from './navbare-routing.module';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbareRoutingModule
  ]
})
export class NavbareModule { }
