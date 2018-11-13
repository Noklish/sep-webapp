import { Component, OnInit } from '@angular/core';
import { AlertService } from '../domain/services/alert.service';
import { NgForm, NgModel } from '@angular/forms';
import { Profile } from './../domain/models/profile';
import { ProfileRepository } from '../domain/profile-repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-issues',
  templateUrl: './update-issues.component.html',
  styleUrls: ['./update-issues.component.css']
})

export class UpdateIssuesComponent implements OnInit {
  public currentUser: Profile;
  title: String;
  issues: any;
  selectedAll: any;
  unselectedAll: any;
  constructor(
    public router: Router,
    public profileRepository: ProfileRepository,
    private alertService: AlertService,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.title = 'Select all/Deselect all checkbox - Angular 2';
      this.issues = [
        { issue: 'The Economy and Jobs' },
        { issue: 'Healthcare'},
        { issue: 'Federal Deficit and Budget'},
        { issue: 'Immigration' },
        { issue: 'Environment and Global Warming' },
        { issue: 'Abortion' },
      ];
    }

    ngOnInit() {

    }
    // selectAll() {
    //   for (let i = 0; i < this.issues.length; i++) {
    //     this.issues[i].selected = this.selectedAll;
    //   }
    // }
    // unselectAll() {
    //   for (let i = 0; i < this.issues.length; i++) {
    //     if (this.issues[i].selected === true) {
    //     this.issues[i].selected = false;
    //     this.selectedAll = false;
    //     }
    //   }
    // }
    // checkIfAllSelected() {
    //   this.selectedAll = this.issues.every(function(item: any) {
    //       return item.selected === true;
    //     });
    // }

    // checkIfAtLeastOnSelected() {
    //   if (this.selectedAll === true) {
    //       return true;
    //     }

    //     for (let i = 0; i < this.issues.length; i++) {
    //       if (this.issues[i].selected === true) {
    //         return true;
    //       }
    //     }
    //     return false;
    //   }
      update() {
        console.log(this.currentUser);
          this.profileRepository.update(`updateIssues/${this.currentUser.username}`, this.issues).subscribe(x => {
          this.alertService.clear();
          this.alertService.success('Sucess! Thanks for telling us about the issues that matter to you.');
          });
      }
    }

