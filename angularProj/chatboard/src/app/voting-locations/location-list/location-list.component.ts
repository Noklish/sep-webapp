import { Component, OnInit, Input } from '@angular/core';
import { VotingLocation } from '../../domain/models/votingLocation';
import { ActivatedRoute } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
  // inputs: ['location']
})
export class LocationListComponent implements OnInit {

  activedRoute: ActivatedRoute;
  @Input()
  public location: VotingLocation;

  constructor() {}

  ngOnInit() {}

}
