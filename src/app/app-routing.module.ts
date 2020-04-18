import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ByDateComponent } from './by-date/by-date.component';
import { DailyComponent } from './home/daily/daily.component';
import { TotalComponent } from './home/total/total.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'daily',
        component: DailyComponent
      },
      {
        path: 'total',
        component: TotalComponent
      },
      {
        path: '',
        redirectTo: 'daily',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'by-date',
    component: ByDateComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
