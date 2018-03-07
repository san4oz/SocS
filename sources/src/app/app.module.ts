import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule,  OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatCardModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'



import { AppComponent } from './app.component';
import { EditableWrapperComponent } from './shared/editable-wrapper/editable-wrapper.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { UploadPostComponent } from './upload-post/upload-post.component'
import { DateTimePickerComponent } from './shared/datetimepicker/datetimepicker.component'

import { PostService } from './services/post.service'

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DashboardComponent,
    UploadPostComponent,
    EditableWrapperComponent,
    DateTimePickerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'uk'},
    PostService,
  ],
  entryComponents: [
    DateTimePickerComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
