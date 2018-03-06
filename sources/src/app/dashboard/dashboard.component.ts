import { Component, OnDestroy } from '@angular/core'
import { PostService } from '../services/post.service'
import { Post } from '../entities/post'
import { Subscription } from 'rxjs/Subscription'
import { DomSanitizer  } from '@angular/platform-browser'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PostService]
})

export class DashboardComponent {
    posts: Post[];
  
    constructor(private postService: PostService, private sanitizer: DomSanitizer) {
        this.posts = postService.getPosts();
        
        postService.postsUploaded$.subscribe(post => {
            post.ImageUrl = sanitizer.bypassSecurityTrustUrl(post.ImageUrl as string);
            this.posts.push(post);            
        });
    }      
}