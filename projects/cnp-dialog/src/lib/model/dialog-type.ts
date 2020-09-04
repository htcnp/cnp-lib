export class Dialog {
    title?: string;
    code?: string;
    message?: string;
}

export class ConfirmDialog extends Dialog {
    btnOk?: string;
    btnCancel?: string;
}

export class ErrorDialog extends Dialog {
    detail?: string;
    btnClose?: string;
}

export class NoficationDialog extends Dialog {
    btnOk?: string;
}
