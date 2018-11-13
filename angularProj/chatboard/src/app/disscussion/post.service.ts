import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../domain/models/post';
import { DisscussionComponent } from './disscussion.component';


@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  protected httpOptions  = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  storePosts(posts: any) {
    console.log(posts);
    return this.http.post('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/addPost', posts, this.httpOptions);
  }

  addComment(comments: any) {
    return this.http.post('http://127.0.0.1:3000/comment/addcomment', comments, this.httpOptions);
  }

  getPosts(object: DisscussionComponent) {
    return this.http.get(`http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/posts/` + object.currentForum,
    this.httpOptions);
  }

  getComments(id: number) {
    console.log(id);
    return this.http.get('http://ec2-18-221-119-189.us-east-2.compute.amazonaws.com:8080/api/comments/' + id, this.httpOptions);
  }

  getTimeDate(id: number) {
    return this.http.get('http://127.0.0.1:3000/allposts/' + id, this.httpOptions);
  }

  deletePosts(id: number) {
    return this.http.delete('http://127.0.0.1:3000/deletePost/' + id, this.httpOptions);
  }
}

