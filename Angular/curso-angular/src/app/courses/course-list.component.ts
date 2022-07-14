import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Course } from "./course";

@Component({/* Faz o Angular reconhecer a classe como elegível para ser um componente */
    selector: 'app-course-list',

    /* template: '<h2>Course List</h2>'    <-   Assim podemos setar até +/- 5 linhas*/
    templateUrl: './course-list.component.html' /* <- Assim podemos setar um template full, e pegar a Url */
})

export class CourseListComponent implements OnInit{ /* OnInit = Quando carregar o componente */

        courses: Course[] = []; /* courses é um Array do tipo 'Course' */

        ngOnInit(): void {
            this.courses = [
                {
                    id: 1,
                    name: 'Angular: Forms',
                    imageUrl: '/assets/images/forms.png',
                    price: 99.99,
                    code: 'XPS-8796',
                    duration: 120,
                    rating: 4.5, 
                    releaseDate: 'November, 2, 2019'
                },
                {
                    id: 2,
                    name: 'Angular: HTTP',
                    imageUrl: '/assets/images/http.png',
                    price: 49.99,
                    code: 'LKL-1094',
                    duration: 80,
                    rating: 4.0, 
                    releaseDate: 'December, 4, 2019'
                }
            ]
        }
}