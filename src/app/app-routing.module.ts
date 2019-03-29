import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from './dashboard/data-list/data-list.component';

const routes: Routes = [
  {path: '', component: DataListComponent},
  {path: 'datalist', component: DataListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
