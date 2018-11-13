import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel, NgForm, FormsModule, FormControl } from '@angular/forms';
import { PostService } from './post.service';
import { Profile } from '../domain/models/profile';
import { Post } from '../domain/models/post';
@Component({
  selector: 'app-disscussion',
  templateUrl: './disscussion.component.html',
  styleUrls: ['./disscussion.component.css']
})
export class DisscussionComponent implements OnInit, OnDestroy {

@ViewChild('f') postForm: NgForm;

currentUser: Profile;
showCommentFields = false;
post: Post;
postsArr: Post;
currentForum;


constructor(
  private postService: PostService,
  public router: Router,
) {
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  console.log('asd');
}


ngOnInit() {

  this.currentForum = this.returnForum(this.currentUser);
  this.showPosts();
}

returnForum(user: Profile) {
  if (user.lastForum === undefined) {
    return 1;
  } else {
    return this.currentUser.lastForum;
  }
}

storePosts(form: NgForm) {
  this.post = {
      username: this.currentUser.username,
      body: this.postForm.value.newPost,
      title: ' ',
      forumid: this.currentUser.lastForum
    };

    this.postService.storePosts(this.post)
    .subscribe(
      (response) => this.showPosts(),
      (error) => console.log(error),
    );
    this.postForm.reset();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  showPosts() {
    console.log('t');
      this.postService.getPosts(this).subscribe(posts => {
      this.postsArr = posts;
    });
  }

  postDelete(item: any) {
    this.postService.deletePosts(item)
    .subscribe(id => {
      this.showPosts();
    });
  }
}
