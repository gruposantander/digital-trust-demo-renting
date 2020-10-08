import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RentingHomepageComponent } from './components/renting/homepage/homepage.component';
import { VerifiedComponent } from './components/verified/verified.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'renting', component: RentingHomepageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'digital-id', component: VerifiedComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
