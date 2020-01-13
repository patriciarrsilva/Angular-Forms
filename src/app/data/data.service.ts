import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postUserSettingForm(userSettings: UserSettings): Observable<UserSettings> {
    return of(userSettings);
  }
}
