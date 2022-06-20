import { Post } from './../post';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.postService.fetchPosts();
  }

}
