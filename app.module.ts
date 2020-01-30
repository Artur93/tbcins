import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentService } from './shared/student.service';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StudentsComponent,
    StudentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [StudentService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
