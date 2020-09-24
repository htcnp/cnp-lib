import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';

import { MenuComponent } from './menu/menu.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [MenuComponent, TopbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatRippleModule
  ],
  exports: [MenuComponent, TopbarComponent]
})
export class CnpLayoutModule { }
