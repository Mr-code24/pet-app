import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly apiUrl = 'https://reqres.in/api/login';

  constructor(
    private readonly http: HttpClient,
  ) {}

  login(email: string, password: string): Observable<string> {
    return this.http
      .post<{ token: string }>(this.apiUrl, { email, password })
      .pipe(
        map((response) => response.token),
        catchError((error) => {
          return throwError(() => new Error(error?.error || 'Error desconocido'));
        })
      );
  }

  storeToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return !!token;
  }
}
