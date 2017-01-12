import {Component} from '@angular/core'
import {getStudents} from './MockStudent'
@Component({
  selector:'hello',
  template:'<div *ngFor="let student of students"><student-comp  [student]="student"></student-comp></div>'
})
export class HelloComponent {
    students = getStudents()
}
