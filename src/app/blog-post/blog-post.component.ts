import { Post } from './../post';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  post$: Post[] = [];

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.postService.fetchPosts();
    this.postService.getPosts();
  }

  getPosts(): void{
    this.post$ = this.postService.getPosts().reverse();
    console.log(this.post$);
  }

}
