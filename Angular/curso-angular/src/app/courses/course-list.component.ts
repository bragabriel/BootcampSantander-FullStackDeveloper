import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course-serice";

@Component({/* Faz o Angular reconhecer a classe como elegível para ser um componente */
    selector: 'app-course-list',

    /* template: '<h2>Course List</h2>'    <-   Assim podemos setar até +/- 5 linhas*/
    templateUrl: './course-list.component.html' /* <- Assim podemos setar um template full, e pegar a Url */
})

export class CourseListComponent implements OnInit{ /* OnInit = Quando carregar o componente */

        courses: Course[] = []; /* courses é um Array do tipo 'Course' */

        constructor(private courseService: CourseService){

        }

        ngOnInit(): void {
            this.courses = this.courseService.retriveAll();
        }
}