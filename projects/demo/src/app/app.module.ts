import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CnpLayoutModule } from 'cnp-layout';
import { CnpDialogModule } from 'projects/cnp-dialog/src/public-api';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CategoryComponent } from './category/category.component';
import { ProvicerComponent } from './provicer/provicer.component';


const routes: Routes = [
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'provicer',
    component: ProvicerComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProvicerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    CnpLayoutModule,
    CnpDialogModule,
    RouterModule.forRoot(routes),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
