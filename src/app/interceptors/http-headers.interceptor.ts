import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(
        req:HttpRequest<any>,
        next:HttpHandler

    ): Observable<HttpEvent<any>>{
       req=req.clone({
           setHeaders:{
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            'x-rapidapi-key': '4ed6e19cb1msh04a981e24a54289p17cf95jsnde22a1a67469'
        },
        setParams:{
            key:'b55ba4b31a984acc981a9dd5f2b39dd0',
        }

       });
       return next.handle(req);
        
    }
}
