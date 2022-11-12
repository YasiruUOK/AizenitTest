import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todolist/todo-list/todo-list.component';
import { AddToDoComponent } from './components/todolist/add-to-do/add-to-do.component';
import { FormsModule } from '@angular/forms';
import { EditToDoComponent } from './components/todolist/edit-to-do/edit-to-do.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddToDoComponent,
    EditToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
