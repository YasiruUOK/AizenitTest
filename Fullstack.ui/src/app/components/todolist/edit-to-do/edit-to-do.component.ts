import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from 'src/app/models/todo.model';
import { ToDosService } from 'src/app/services/to-dos.service';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.component.html',
  styleUrls: ['./edit-to-do.component.css']
})
export class EditToDoComponent implements OnInit {

  toDoDetails:ToDo={
    id:'',
    title:'',
    subTitle:'',
    date:''
  }
  constructor(private route: ActivatedRoute, private toDoService: ToDosService, public datepipe: DatePipe, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');
        if(id){
          this.toDoService.getToDo(id)
          .subscribe({
            next:(response)=>{
              let latest_date =this.datepipe.transform(response.date, 'yyyy-MM-dd');
              if(latest_date!=null){
                response.date=latest_date;
              }
              this.toDoDetails=response;
            }
          })
        }
      }
    })
  }

  updateToDo(){
    this.toDoService.updateToDo(this.toDoDetails.id, this.toDoDetails)
    .subscribe({
      next:(toDo)=>{
        this.router.navigate(['']);
      }
    });
  }

  deleteToDo(id:string){
    this.toDoService.deleteToDo(id)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['']);
      }
    })
  }
}
