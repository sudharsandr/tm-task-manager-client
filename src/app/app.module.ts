import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { TaskServiceService } from './service/task-service/task-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { UpdateCommentComponent } from './components/update-comment/update-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    ListCommentsComponent,
    AddCommentComponent,
    UpdateCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TaskServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
