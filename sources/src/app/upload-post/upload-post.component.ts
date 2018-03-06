import { Component, ElementRef, ViewChild, OnDestroy } from '@angular/core'
import { PostService } from '../services/post.service'
import { Subscription } from 'rxjs/subscription'
import { Post } from '../entities/post'

@Component({
  selector: 'upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.css']
})

export class UploadPostComponent implements OnDestroy{
    @ViewChild("uploadPostButton", {read: ElementRef}) uploadPostButton: ElementRef
    subscription: Subscription
    
    constructor(private postService: PostService) {
    }
    
    clickOnUpload() {
        this.uploadPostButton.nativeElement.click();
    }
    
    handleUploadedFiles(files: FileList){
        
        debugger;
        var newPosts = new Array<Post>();
        
        for(var i = 0; i < files.length; i++){
            var url = URL.createObjectURL(files[i]);
            var newPost = new Post();
            newPost.ImageUrl = url;
            newPosts.push(newPost);
        }
        
        this.postService.uploadPosts(newPosts);
    }
    
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
