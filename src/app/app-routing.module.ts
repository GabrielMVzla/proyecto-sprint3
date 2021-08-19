import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivasComponent } from './directivas/directivas.component';
import { LayoutComponent } from './layout/layout.component';
import { PaginacionComponent } from "./paginacion/paginacion.component"
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  {
    path: '', 
  component: DirectivasComponent
  },
  {
    path: 'directivas', 
  component: DirectivasComponent
  },
  {
    path:'',
    component: LayoutComponent,
    children:[
      {
        path:'company',
        loadChildren: () => import ('./company/company.module').then( module => module.CompanyModule)
      },
      {
        path:'listas',
        loadChildren: () => import ('./listas/personal.module').then( module => module.PersonalModule)
      }
    ]
  },
  {
    path: "paginate",
    component: PaginacionComponent
  },
  {
    path: "home",
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
