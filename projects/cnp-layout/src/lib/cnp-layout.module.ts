import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

import { MenuComponent } from './menu/menu.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [MenuComponent, TopbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatMenuModule
  ],
  exports: [MenuComponent, TopbarComponent]
})
export class CnpLayoutModule { }
