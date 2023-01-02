import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';

import { CoursesService } from './Services/courses.service';
import { AuthorsComponent } from './Components/authors/authors.component';
import { AuthorsService } from './Services/authors.service';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService, AuthorsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
