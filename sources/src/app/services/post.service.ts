import { Injectable } from '@angular/core';
import { Post } from '../entities/post'
import { Subject } from 'rxjs/Subject'

export const Posts : Post[] = [
      { ImageUrl : 'http://materializecss.com/images/sample-1.jpg' },
      { ImageUrl : 'http://materializecss.com/images/sample-1.jpg' },
      { ImageUrl : 'http://materializecss.com/images/sample-1.jpg' },
      { ImageUrl : 'http://materializecss.com/images/sample-1.jpg' },
      { ImageUrl : 'http://materializecss.com/images/sample-1.jpg' },
      { ImageUrl : 'http://materializecss.com/images/sample-1.jpg' },
      { ImageUrl : 'http://materializecss.com/images/sample-1.jpg' }
];

@Injectable()
export class PostService {

  constructor() { }
  
  private uploadedPosts = new Subject<Post>();
  
  postsUploaded$ = this.uploadedPosts.asObservable();
  
  uploadPosts(posts: Post[]){
      posts.forEach(post => {
          debugger;
         this.uploadedPosts.next(post); 
      });
  }
  
  getPosts():Post[]{
      return Posts;
  }

}