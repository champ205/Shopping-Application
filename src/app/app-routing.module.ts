import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {IssueBookComponent} from './book/issue-book/issue-book.component';
import {SignupComponent} from './user/signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path:'issueBook', component: IssueBookComponent},
  {path:'signup', component: SignupComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }