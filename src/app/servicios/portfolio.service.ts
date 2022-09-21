import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


//importamos el httpclient y Obervables

//inyectable significa que van a ser inyectados en los 
//componentes para q los componentes los utilicen...

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any>{
    return this.http.get("./assets/data/data.json")
   
  }
}


//creamos obtener datos 
//retornamos la direccion donde se aloja el JSon...