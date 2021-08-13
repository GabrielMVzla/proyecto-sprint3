import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivasComponent } from './directivas/directivas.component';

const routes: Routes = [
  {path: '', component: DirectivasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
