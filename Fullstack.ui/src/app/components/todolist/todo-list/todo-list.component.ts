import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';
import { ToDosService } from 'src/app/services/to-dos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: ToDo[]=[];
  constructor(private toDosService: ToDosService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.toDosService.getAllToDo()
    .subscribe({
      next:(todos)=> {
        for (let i = 0; i < todos.length; i++) {
          let latest_date =this.datepipe.transform(todos[i].date, 'yyyy-MM-dd');
              if(latest_date!=null){
                todos[i].date=latest_date;
              }
        }
        
        this.todos=todos;
      },
      error:(response)=>{
        console.log(response);
      }
    })
  }

}
