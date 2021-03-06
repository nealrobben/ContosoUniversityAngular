import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from "@angular/common";

import { CourseModule } from "./course/course.module";
import { DepartmentModule } from "./department/department.module";
import { InstructorModule } from "./instructor/instructor.module";
import { StudentModule } from "./student/student.module";
import { AboutModule } from "./about/about.module";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

import { StudentComponent } from './student/student.component';
import { StudentOverviewComponent } from './student/studentOverview.component';
import { StudentDetailsComponent } from './student/studentDetails.component';
import { StudentCreateComponent } from './student/studentCreate.component';
import { StudentEditComponent } from './student/studentEdit.component';

import { CourseComponent } from './course/course.component';
import { CourseOverviewComponent } from './course/courseOverview.component';
import { CourseDetailsComponent } from './course/courseDetails.component';
import { CourseEditComponent } from './course/courseEdit.component';
import { CourseCreateComponent } from './course/courseCreate.component';

import { DepartmentComponent } from './department/department.component';
import { DepartmentOverviewComponent } from './department/departmentOverview.component';
import { DepartmentDetailsComponent } from './department/departmentDetails.component';
import { DepartmentEditComponent } from './department/departmentEdit.component';
import { DepartmentCreateComponent } from './department/departmentCreate.component';

import { InstructorComponent } from './instructor/instructor.component';
import { InstructorOverviewComponent } from './instructor/instructorOverview.component';
import { InstructorDetailsComponent } from './instructor/instructorDetails.component';
import { InstructorCreateComponent } from './instructor/instructorCreate.component';
import { InstructorEditComponent } from './instructor/instructorEdit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent, pathMatch: 'full' },
      {
        path: 'students', component: StudentComponent,
        children: [
          { path: "details/:id", component: StudentDetailsComponent },
          { path: "create", component: StudentCreateComponent },
          { path: "edit/:id", component: StudentEditComponent },
          { path: "**", component: StudentOverviewComponent }
        ]
      },
      {
        path: 'courses', component: CourseComponent,
        children: [
          { path: "details/:id", component: CourseDetailsComponent },
          { path: "create", component: CourseCreateComponent },
          { path: "edit/:id", component: CourseEditComponent },
          { path: "**", component: CourseOverviewComponent }
        ]
      },
      {
        path: 'instructors', component: InstructorComponent,
        children: [
          { path: "details/:id", component: InstructorDetailsComponent },
          { path: "create", component: InstructorCreateComponent },
          { path: "edit/:id", component: InstructorEditComponent },
          { path: "**", component: InstructorOverviewComponent }
        ]
      },
      {
        path: 'departments', component: DepartmentComponent,
        children: [
          { path: "details/:id", component: DepartmentDetailsComponent },
          { path: "create", component: DepartmentCreateComponent },
          { path: "edit/:id", component: DepartmentEditComponent },
          { path: "**", component: DepartmentOverviewComponent }
        ]}
    ]),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CourseModule,
    DepartmentModule,
    InstructorModule,
    StudentModule,
    AboutModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
