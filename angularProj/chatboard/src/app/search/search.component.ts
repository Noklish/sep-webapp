import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../domain/models/profile';
import { SearchRepostitory } from '../domain/search-repository.service';
import { NgForm, NgModel } from '@angular/forms';
import { AlertService } from '../domain/services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  criteria = ['Zipcode', 'Issues', 'Candidate Name'];
  public profiles: any;

  public issues = [
    { issue: 'Economy' },
    { issue: 'Jobs' },
    { issue: 'Healthcare'},
    { issue: 'Deficit' },
    { issue: 'Budget' },
    { issue: 'Immigration' },
    { issue: 'Environment' },
    { issue: 'Abortion' },
  ];


  @Input()
  public query: any;
  @Input()
  public type: string;
  public n: any;
  public inSearch: boolean;

  constructor(
    public searchRepostitory: SearchRepostitory,
    private alertService: AlertService,
    private router: Router

  ) {
  }

  ngOnInit() { }

  onSelectionChange(idx) {
    if (idx === 'Candidate Name') {
      idx = 'Candidate';
    }
    this.type = idx;
    this.type = this.type.toLowerCase();
  }

  link(username) {
    console.log(username);
    this.router.navigateByUrl('home/profile/' + username);
  }
  submit() {
    // console.log(`${this.query} ---- ${this.type}`);
    this.inSearch = true;
    this.profiles = null;
    if (!this.type) {
      this.alertService.clear();
      this.alertService.warn('Please select a search createria.');
    } else {
      this.alertService.clear();
    this.searchRepostitory.search(this.type, this.query).subscribe(data => {
      this.profiles = data;
      console.log(this.profiles);
    });
  }
    this.query = '';
  }
}
