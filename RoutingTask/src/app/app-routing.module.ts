import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { BatchListComponent } from './components/batch-list/batch-list.component';
import { StudentprofileComponent } from './components/studentprofile/studentprofile.component';
import { BatchdetailsComponent } from './components/batchdetails/batchdetails.component';

const routes: Routes = [

  {
    path:'students',
    component:StudentListComponent
  },

  {
    path:'batches',
    component:BatchListComponent
  },

  { path: 'student-profile/:id',
     component: StudentprofileComponent 
    }, 

  {
    path:'batchDetails/:id',
    component:BatchdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
