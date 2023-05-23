import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReqresComponent } from './reqres/reqres.component';

const routes: Routes = [
  { path: '', component: ReqresComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
