import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { enviroment } from "../../../enviroment";

export const urlInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const requestClone = request.clone({url: enviroment.apiUrl + request.url});
    return next(requestClone);
}