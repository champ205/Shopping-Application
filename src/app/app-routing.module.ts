import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {IssueBookComponent} from './book/issue-book/issue-book.component';
import {SignupComponent} from './user/signup/signup.component';
import {} from './book/issue-book/issue-book.component';
import { AvailableBooksComponent } from './book/available-books/available-books.component';
import { IssuedBooksComponent } from './book/issued-books/issued-books.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path:'issueBook', component: IssueBookComponent},
  {path:'signup', component: SignupComponent},
  {path:'available-books', component: AvailableBooksComponent},
  {path:'issued-books', component: IssuedBooksComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'**', component : PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }