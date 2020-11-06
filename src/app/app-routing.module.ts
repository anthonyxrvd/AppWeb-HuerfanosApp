import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './components/Empleado/agregar/agregar.component';
import { ListarComponent } from './components/Empleado/listar/listar.component';
import { HomeComponent } from './components/Home/home/home.component';


const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'empleados/agregar',component:AgregarComponent},
  {path:'empleados/agregar/:id',component:AgregarComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
