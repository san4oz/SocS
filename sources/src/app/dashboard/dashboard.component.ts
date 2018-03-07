import { Component, OnDestroy, OnInit } from '@angular/core'
import { PostService } from '../services/post.service'
import { Post } from '../entities/post'
import { Subscription } from 'rxjs/Subscription'
import { DomSanitizer  } from '@angular/platform-browser'
import { ObservableMedia } from '@angular/flex-layout' 
import { Observable } from 'rxjs/Observable'
import "rxjs/add/operator/map";
import "rxjs/add/operator/takeWhile";
import "rxjs/add/operator/startWith";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PostService]
})

export class DashboardComponent implements OnInit {
    posts: Post[];
  
    public cols: Observable<Number>;

    constructor(private postService: PostService, private sanitizer: DomSanitizer, private observableMedia: ObservableMedia) {
        this.posts = postService.getPosts();
        
        postService.postsUploaded$.subscribe(post => {
            post.ImageUrl = sanitizer.bypassSecurityTrustUrl(post.ImageUrl as string);
            this.posts.push(post);            
        });
    }      

    ngOnInit(){
        const grid = new Map([
            ["xs", 1],
            ["sm", 2],
            ["md", 2],
            ["lg", 2],
            ["xl", 2]
          ]);

          let start: number;
          grid.forEach((cols, mqAlias) => {
            if (this.observableMedia.isActive(mqAlias)) {
              start = cols;
            }
          });

        this.cols = this.observableMedia.asObservable()
            .map(change => {
                console.log(change);
                console.log(grid.get(change.mqAlias));
                return grid.get(change.mqAlias);
            })
            .startWith(start);
    }
}