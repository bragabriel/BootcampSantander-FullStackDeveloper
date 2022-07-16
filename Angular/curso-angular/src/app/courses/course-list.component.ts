import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course-serice";

@Component({/* Faz o Angular reconhecer a classe como elegível para ser um componente */
    selector: 'app-course-list',

    /* template: '<h2>Course List</h2>'    <-   Assim podemos setar até +/- 5 linhas*/
    templateUrl: './course-list.component.html' /* <- Assim podemos setar um template full, e pegar a Url */
})

export class CourseListComponent implements OnInit{ /* OnInit = Quando carregar o componente */

        filteredCourses: Course[] = []; /* Array de Courses */

        _courses: Course[] = [];

        _filterBy!: string;

        constructor(private courseService: CourseService){ }
        

        ngOnInit(): void {
            this._courses = this.courseService.retriveAll();
            this.filteredCourses = this._courses;
        }

        set filter(value: string) { 
            this._filterBy = value;
    
            this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
        }

        get filter() { 
            return this._filterBy;
        }
}