import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoficationDialog, ConfirmDialog, ErrorDialog } from './model/dialog-type';
import { NoficationDialogComponent } from './nofication-dialog/nofication-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CnpDialogService {

  constructor(private matDialog: MatDialog) { }
  nofication(data: NoficationDialog) {
      this.matDialog.open(NoficationDialogComponent, { data });
  }

  confirm(data: ConfirmDialog, callback: (result: boolean) => void) {
      const dialogRef = this.matDialog.open(ConfirmDialogComponent, { data });
      dialogRef.afterClosed().subscribe(callback);
  }

  error(data: ErrorDialog) {
      this.matDialog.open(ErrorDialogComponent, { data });
  }
}
