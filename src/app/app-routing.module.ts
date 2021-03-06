import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';
import { LoginComponent } from './login/login.component';
import { TokenAuthGuard } from './auth/token-auth.guard';
import { SuperadminGuard } from './auth/superadmin.guard';
import { LogoutComponent } from './logout/logout.component';
import { TokenNullGuard } from './auth/token-null.guard';
import {BookdetailGuard} from './auth/bookdetail.guard';
import {BookrequestDetailComponent} from './bookrequest-details/bookrequest-detail/bookrequest-detail.component'
import {BookrequestDetailsComponent} from './bookrequest-details/bookrequest-details.component';
import {AdministratorDetailsComponent} from './administrator-details/administrator-details.component';
import { BookDetailsComponent } from './book-details/book-details.component'

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "author-details", component: AuthorDetailsComponent, canActivate:[TokenAuthGuard]},
  {path: "login", component: LoginComponent, canActivate:[TokenNullGuard]},
  {path: "publisher-details", component: PublisherDetailsComponent, canActivate:[TokenAuthGuard]},
  {path: "logout", component: LogoutComponent, canActivate:[TokenAuthGuard]},
  {path: "bookrequest-details", component: BookrequestDetailsComponent, canActivate:[TokenAuthGuard]},
  {path: "administrator-details", component: AdministratorDetailsComponent, canActivate:[SuperadminGuard]},
  {path: "bookrequest-detail", component: BookrequestDetailComponent, canActivate:[BookdetailGuard]},
  {path: "book-details", component: BookDetailsComponent, canActivate:[TokenAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
