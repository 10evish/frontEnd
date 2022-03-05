import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetBlogsComponent } from './get-blogs/get-blogs.component';
import { Routes ,RouterModule } from '@angular/router';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

const appRoutes: Routes = [
  { path: '', component: AddBlogsComponent, pathMatch: 'full' },
  {path:'add',component:AddBlogsComponent},
  { path: 'blogs', component: GetBlogsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GetBlogsComponent,
    AddBlogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
 }
