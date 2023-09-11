import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentosComponent } from './pages/medicamentos/medicamentos.component';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
