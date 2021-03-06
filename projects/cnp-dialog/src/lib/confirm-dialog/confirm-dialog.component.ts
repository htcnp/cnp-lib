import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cnp-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [`
    .ui-dialog {
      position: relative;
      min-width: 240px;
    }
    .ui-dialog .ui-dialog-titlebar {
      min-height: 52px;
      background-color: #3D72B4;
      color: #ffffff;
      font-weight: 700;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: -24px;
      margin-right: -24px;
      margin-top: -24px;
      padding: 10px;
    }
    .ui-dialog .ui-dialog-title {
      margin-left: 5px;
      float: none;
      flex: 1;
      text-align: left;
    }
    .ui-dialog .ui-dialog-content {
      background-color: #ffffff;
      color: #333333;
      padding: 0.571em 1em;
      text-align: center;
    }
    .dialog-message {
      white-space: pre-wrap;
    }
  `]
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialogRef.disableClose = true;
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onAccept() {
    this.dialogRef.close(true);
  }

}
