import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { BatchListComponent } from './components/batch-list/batch-list.component';
import { StudentprofileComponent } from './components/studentprofile/studentprofile.component';
import { BatchdetailsComponent } from './components/batchdetails/batchdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    BatchListComponent,
    StudentprofileComponent,
    BatchdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
