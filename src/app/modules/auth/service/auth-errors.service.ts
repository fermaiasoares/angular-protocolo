import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class AuthErrorService implements ErrorHandler {
    handleError(error: any): void {
        console.log('Custom handleError', error);
    }
}
