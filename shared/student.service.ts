import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  formData: Student;
  list: Student[];
  readonly rootURL = 'https://localhost:44336/api';

  constructor(private http: HttpClient) { }

  postStudent(formData: Student) {
    return this.http.post(this.rootURL + '/student/addstudent', formData);
  }

  putStudent(formData: Student) {
    return this.http.put(this.rootURL + '/student/updatestudent/' + formData.id, formData);
  }

  deleteStudent(id: number) {
    return this.http.delete(this.rootURL + '/student/deletestudent/' + id);
  }

  refreshList() {
    // return this.http.get(this.rootURL + '/student').toPromise();
    this.http.get(this.rootURL + '/student').toPromise().then(res => this.list = res as Student[]);
    // return this.http.get(this.rootURL + '/student').pipe(map((response: any) => response));
  }
}
