import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/student.service';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.studentService.formData = {
      id: null,
      privateNumber: '',
      name: '',
      surname: '',
      dateOfBirth: '',
      sex: null
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.studentService.postStudent(form.value).subscribe(
      res => {
      this.toastr.success('მონაცემები ჩაწერილია', 'სტუდენტების რეგისტრაცია');
      this.resetForm(form);
      this.studentService.refreshList();
    },
      msg => {
        this.toastr.error('მონაცემები ვერ დაემატა', 'სტუდენტების რეგისტრაცია');
      });
  }

  updateRecord(form: NgForm) {
    this.studentService.putStudent(form.value).subscribe(
      res => {
      this.toastr.info('მონაცემები განახლებულია', 'სტუდენტების რეგისტრაცია');
      this.resetForm(form);
      this.studentService.refreshList();
    },
      msg => {
        this.toastr.error('მონაცემები ვერ განახლდა', 'სტუდენტების რეგისტრაცია');
      });
  }

}
