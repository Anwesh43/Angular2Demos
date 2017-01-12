import {Component,Input} from '@angular/core'
import Student from './Student'
@Component({
    selector:'student-comp',
    template:'<div boxify><p>{{student.name}}</p><p>{{student.age}}</p><p>{{student.sub}}</p></div>'
})
export class StudentComponent {
    @Input("student") student:Student
}
