import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private subscriptionTypesUrl = 'api/subscriptionTypes/subscriptionTypes.json';

  constructor(private http: HttpClient) {}

  getSubscriptionTypes(): Observable<string[]> {
    return this.http
      .get<string[]>(this.subscriptionTypesUrl)
      .pipe(catchError(this.handleError));
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post(
      'https://putsreq.com/WlihRuAjh9DFqdHV7ZMe',
      userSettings
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
