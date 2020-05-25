import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth-services/auth.service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient, private auth: AuthService) {
    if (this.auth.isAuthenticated()) {
      this.auth.getIdToken().then((token: string) => {
        httpOptions.headers = httpOptions.headers.set('Authorization', token);
      });
    }
  }

  fetch(path: string): Observable<object> {
    return this.http.get(path, httpOptions);
  }

  post(path: string, body: string): Observable<object> {
    return this.http.post(path, body, httpOptions);
  }

  put(path: string, body: any): Observable<object> {
    return this.http.put(path, body, httpOptions);
  }
}
