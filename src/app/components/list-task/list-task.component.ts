import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskServiceService } from '../../service/task-service/task-service.service';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {
  constructor(private taskService: TaskServiceService, private router: Router) { }

  // This should be retrieved from DB later
  Status: any[] = [
    {
      id: 1,
      name: 'Committed'
    },
    {
      id: 2,
      name: 'In progress'
    },
    {
      id: 3,
      name: 'QA'
    },
    {
      id: 4,
      name: 'Closed'
    }
  ];

  // This should be retrieved from DB later
  TaskType: any[] = [
    {
      id: 1,
      name: 'Story'
    },
    {
      id: 2,
      name: 'Epic'
    },
    {
      id: 3,
      name: 'Feature'
    }
  ];

  // This should be retrieved from DB later
  Users: any[] = [
    {
      id: 1,
      name: 'Sudharsan'
    },
    {
      id: 2,
      name: 'Test user 2'
    },
    {
      id: 3,
      name: 'User 3'
    }
  ];
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

SendStatusForStatusId(id: number)
{
  var status = this.Status.filter(item => item.id == id);
  console.log(status);
  if(status.length >0 && status[0] != null)
  return status[0]?.name;
  else return id.toString();
}

SendTaskForTaskId(id: number)
{
  var Task = this.TaskType.filter(item => item.id == id);
  console.log(Task);
  if(Task.length >0 && Task[0] != null)
  return Task[0]?.name;
  else return id.toString();
}

SendUserForUserId(id: number)
{
  var User = this.Users.filter(item => item.id == id);
  console.log(User);
  if(User.length >0 && User[0] != null)
  return User[0]?.name;
  else return id.toString();
}

NavigateUpdate(taskId: number)
{
  this.router.navigate(['/updatetask/']);
}

NavigateAdd()
{
  this.router.navigate(['/addtask/']);
}
}