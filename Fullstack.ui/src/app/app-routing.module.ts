import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToDoComponent } from './components/todolist/add-to-do/add-to-do.component';
import { EditToDoComponent } from './components/todolist/edit-to-do/edit-to-do.component';
import { TodoListComponent } from './components/todolist/todo-list/todo-list.component';

const routes: Routes = [
  {
    path:'',
    component:TodoListComponent
  },
  {
    path:'todolist',
    component:TodoListComponent
  },
  {
    path:'todolist/add',
    component:AddToDoComponent
  },
  {
    path:'todolist/edit/:id',
    component:EditToDoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
