import { Component, OnInit, Input } from '@angular/core';
import { VotingLocation } from '../../domain/models/votingLocation';
import { VotingLocationRepostitory } from '../../domain/votingLocation-repository.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css'],
  // inputs: ['location']
})
export class LocationDetailsComponent implements OnInit {

@Input()
public location: VotingLocation;

constructor(
    private activedRoute: ActivatedRoute,
    private router: Router,
    private votingLocationRepostitory: VotingLocationRepostitory
  ) {}

  trasfer() {
    this.router.navigateByUrl( '/home/locations');
  }

  ngOnInit() {
    this.activedRoute.params.subscribe((params: any) => {
        this.location = params;
  });
  }
}
