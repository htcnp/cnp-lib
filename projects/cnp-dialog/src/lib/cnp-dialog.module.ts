import { NgModule } from '@angular/core';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { NoficationDialogComponent } from './nofication-dialog/nofication-dialog.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CnpDialogService } from './cnp-dialog.service';



@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  declarations: [ConfirmDialogComponent, ErrorDialogComponent, NoficationDialogComponent],
  providers: [CnpDialogService]
})
export class CnpDialogModule { }
