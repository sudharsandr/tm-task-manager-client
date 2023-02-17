import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) { }

  GetAllTask(): Observable<any> {
    return this.http.get<any[]>('https://localhost:7253/api/Task');
  }

  RemoveTask(taskId: number) : Observable<any>
  {
    return this.http.delete<any>('https://localhost:7253/api/Task/'+ taskId.toString());
  }
}
