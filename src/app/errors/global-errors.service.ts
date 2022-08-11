import { ErrorHandler, Injectable } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    handleError(error: Error): void {
        if (error instanceof HttpErrorResponse) {
            console.error('Backend returned code ' + error.status + ', ' +
                'body was: ' + error.error.message);
        }
    }
}
