import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../shared/student.service';
import {Student} from '../../shared/student.model';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private service: StudentService, private datePipe: DatePipe, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(std: Student) {
    std.dateOfBirth = this.datePipe.transform(new Date(std.dateOfBirth),'yyyy-MM-dd');
    this.service.formData = Object.assign({}, std);
  }

  onDelete(id: number) {
    if (confirm('წავშალოთ?')) {
      this.service.deleteStudent(id).subscribe(
        res => {
          this.service.refreshList();
          this.toastr.warning('მონაცემები წაშლილია', 'სტუდენტების რეგისტრაცია');
        });
    }
  }

}
