import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/Model/Empleado';
import { EmpleadoService } from 'src/app/Service/Empleado/empleado.service';
import swal from 'sweetalert';
//import swal from 'sweetalert/typings/sweetalert';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  submitted = false;
  empleado: Empleado = new Empleado();
  titulo: string = "Nuevo Empleado";
  constructor(private empleadoService: EmpleadoService, private router: Router, private activatedRoute: ActivatedRoute) { };

  ngOnInit(): void {
    this.cargarEmplado();
  }

  public cargarEmplado(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.empleadoService.getEmpleado(id).subscribe((empleado)=> this.empleado =empleado);
  }
})
 }
 update(): void{
  this.empleadoService.update(this.empleado).subscribe(
    empleado => {
      swal('Empleado Actualizado',
         `Empleado ${empleado.nombre} actualizado con exito`,
        'success')
      this.goto("../listar")
    }
  );
  this.submitted = true;
}

  public create(): void {
  this.empleadoService.create(this.empleado).subscribe(
    empleado => {
      swal('Empleado', `${empleado.nombre} registrado con exito`,
        'success')
      this.goto("../listar")
    }
  );
  this.submitted = true;
}

  public goto(url) {
  this.router.navigate([url]).then((e) => {
    if (e) {
      console.log("Navigation is successful!");
    } else {
      console.log("Navigation has failed");
    }
  });
}
}
