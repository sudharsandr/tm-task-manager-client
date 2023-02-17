import { Component } from '@angular/core';
import { TaskServiceService } from '../../service/task-service/task-service.service';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {
  constructor(private taskService: TaskServiceService) { }
  AllTask: any[] = [];
  ngOnInit(): void {
        this.GetAllTask();
    }

RemoveTask(taskId: number)
{
 this.taskService.RemoveTask(taskId) .subscribe({
  next: (data) => {
    
    console.log(data);
    this.GetAllTask();
  },
  error: (e) => console.error(e)
});
}

GetAllTask()
{
  this.taskService.GetAllTask()
  .subscribe({
    next: (data) => {
      this.AllTask = data.response;
      console.log(this.AllTask);
    },
    error: (e) => console.error(e)
  });
}
}