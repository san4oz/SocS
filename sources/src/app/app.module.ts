import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule,  OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';



import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { UploadPostComponent } from './upload-post/upload-post.component'

import { PostService } from './services/post.service'

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DashboardComponent,
    UploadPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'uk'},
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
