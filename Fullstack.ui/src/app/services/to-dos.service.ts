import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToDo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {
  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllToDo():Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this.baseApiUrl+'/api/ToDo');
  }

  addToDo(addToDoRequest : ToDo): Observable<ToDo>{
    addToDoRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<ToDo>(this.baseApiUrl+'/api/ToDo', addToDoRequest);
  }

  getToDo(id: string): Observable<ToDo>{
    return this.http.get<ToDo>(this.baseApiUrl+'/api/ToDo/'+ id);
  }

  updateToDo(id:string, updateToDoRequest:ToDo): Observable<ToDo>{
    return this.http.put<ToDo>(this.baseApiUrl+'/api/ToDo/'+ id,updateToDoRequest);
  }

  deleteToDo(id:string): Observable<ToDo>{
    return this.http.delete<ToDo>(this.baseApiUrl+'/api/ToDo/'+ id);
  }
}
