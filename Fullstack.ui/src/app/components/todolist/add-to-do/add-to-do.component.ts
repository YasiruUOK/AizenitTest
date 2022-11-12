import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDo } from 'src/app/models/todo.model';
import { ToDosService } from 'src/app/services/to-dos.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {

  addToDoRequest:ToDo={
    id:'',
    title:'',
    subTitle:'',
    date:''
  }
  constructor(private toDoService: ToDosService, private router:Router) { }

  ngOnInit(): void {
  }

  addToDo(){
    //console.log(this.addToDoRequest);
    this.toDoService.addToDo(this.addToDoRequest)
    .subscribe({
      next:(toDo)=>{
        this.router.navigate(['']);
      }
    });
  }
}
