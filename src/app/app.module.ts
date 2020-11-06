import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { HomeComponent } from './components/Home/home/home.component';
import { ListarComponent } from './components/Empleado/listar/listar.component';
import { AgregarComponent } from './components/Empleado/agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../app/Service/Empleado/empleado.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '', redirectTo:'/home',pathMatch:'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListarComponent,
    AgregarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
