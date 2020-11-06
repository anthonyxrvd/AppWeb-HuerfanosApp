import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from 'src/app/Model/Empleado';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url: string = "http://localhost:8090/api";
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' })
  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get(this.url + "/ObtenerEmpelados").pipe(
      map(response => response as Empleado[])
    );
  }
  create(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.url + "/Empleados", empleado, { headers: this.httpHeaders })
  }

  getEmpleado(id): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.url + "/Empleados"}/${id}`);
  }

  update(empleado: Empleado): Observable<Empleado> {

    return this.http.put<Empleado>(
      `${this.url + "/Empleados"}/${empleado.id}`, empleado, { headers: this.httpHeaders }
    )
  }

  delete(id:number):Observable<Empleado>{
return this.http.delete<Empleado>(
  `${this.url + "/Empleados"}/${id}`, { headers: this.httpHeaders })
  }
}
