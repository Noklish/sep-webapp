import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import { VotingLocation } from './../domain/models/votingLocation';
import { ActivatedRoute, Router } from '@angular/router';
import {VotingLocationRepostitory } from './../domain/votingLocation-repository.service';


@Component({
  selector: 'app-voting-locations',
  templateUrl: './voting-locations.component.html',
  styleUrls: ['./voting-locations.component.css'],
})


export class VotingLocationsComponent implements OnInit {
  @Input()
  public query: string;
  public filter: string;
  locations: object;
  currentLocation: object;


  constructor(
    private http: HttpClient,
    public votingLocationRepostitory: VotingLocationRepostitory,
    public router: Router,
   ) {
    this.filter = '';
  }

  ngOnInit() {
    this.votingLocationRepostitory.get().subscribe(locations => {
    this.locations = locations;
   });
 }


 showLocation(item) {
  this.filter = item.name;
  item.highlight = !item.highlight;
  this.currentLocation = item;
}

clear() {
  this.currentLocation = {};
}

}
