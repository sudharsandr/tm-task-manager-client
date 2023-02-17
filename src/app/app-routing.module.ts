import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './components/list-task/list-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'listtask', pathMatch: 'full' },
  { path: 'listtask', component: ListTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
