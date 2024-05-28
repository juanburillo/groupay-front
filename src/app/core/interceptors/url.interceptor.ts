import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { environment } from "../../../environments/environment";

export const urlInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const requestClone = request.clone({url: environment.apiUrl + request.url});
    return next(requestClone);
}