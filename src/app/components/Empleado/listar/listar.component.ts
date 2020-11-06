import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Model/Empleado';
import { EmpleadoService } from 'src/app/Service/Empleado/empleado.service';
import Swal from 'sweetalert2';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  empleados: Empleado[];
  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(data => { this.empleados = data; });

  }
delete(empleado:Empleado): void{
  Swal.fire({
    title: 'Está seguro que desea eliminar el Empleado?',
    text: `${empleado.apellido} ${empleado.nombre} ? `,
    icon: 'warning',
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminarlo!',
    cancelButtonText: 'No, Cancelar',
    reverseButtons: true
  }).then((result)=>{
    if (result.value){
      this.empleadoService.delete(empleado.id).subscribe(
        response =>{
          this.empleados = this.empleados.filter(emp => emp!== empleado)
          Swal.fire('Empleado Eliminado',
          `Empleado ${empleado.genero} eliminado con exito`,
          'success')
        }
      )

    }
  })
}

}
