import { catchError } from 'rxjs/operators';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VotingLocation } from './models/votingLocation';
import { Repostitory } from './repository.service';

@Injectable()
export class VotingLocationRepostitory extends Repostitory<VotingLocation> {
  protected endPoint = 'http://127.0.0.1:3000/locations';
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
}
