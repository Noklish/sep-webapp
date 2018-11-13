import { catchError } from 'rxjs/operators';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Repostitory } from './repository.service';
import { Profile } from './models/profile';

@Injectable()
export class SearchRepostitory {
  protected endPoint = 'http://127.0.0.1:3000/';
  protected queryUrl = '?search=';
  protected httpOptions  = {
  headers: new HttpHeaders({
  'Content-Type' : 'application/json',
    })
  };

  constructor(protected httpClient: HttpClient) {}

  public search(type: string, query: string): Observable<Profile[]> {
    return this.httpClient.get(`${this.endPoint}${type}${this.queryUrl}${query}`, this.httpOptions).pipe(
      catchError(this.handleException)
    );
  }

  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return Observable.throw(exception);
  }
}
