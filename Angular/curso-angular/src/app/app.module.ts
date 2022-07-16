import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component'
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    [  
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
        {
          path: 'courses', component: CourseListComponent
        },
        {
          path: 'courses/info/:id', component: CourseInfoComponent /* Triggando a rota ao componente */
        },
        {
          path: '', redirectTo: 'courses', pathMatch: 'full'
        },
        {
          path: '**', component: Error404Component
        },
      ]),
    ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }