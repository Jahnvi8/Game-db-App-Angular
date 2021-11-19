import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path:'',
  
    component:ListComponent,

  },
  {
    path:'search/:game-search',
   
    component:ListComponent,
  },
  {
    path:'details/:id',
    component:DetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
