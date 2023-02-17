import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  APIURL: string = 'http://localhost:8080/'; //puerto del servidor al que llamo. Es localhost porque tengo el servidor en mi máquina,
  // y  cuando lanzo el servicio el STS del backend, lo lanzo en el 8080. No tiene que ver donde lanzo el front con angular en el puerto 5500

  constructor(private http: HttpClient) { } //inyecto el httpClient en el constructor

  //Me creo cada  funcion por cada servicio de mi api: put, post, delete... leerApi lo usaré para el get de todas las categorias, por ejemplo
  leerApi(url:string): Observable<any>{
    return this.http.get(this.APIURL+url).pipe(share());
  }
  //crear otro con post, otro con putApi, otro con deleteApi
  insertApi(url:string, dto:any): Observable<any>{
    return this.http.post(this.APIURL+url, dto).pipe(share());
  }
  deleteApi(url:string): Observable<any>{
    return this.http.delete(this.APIURL+url).pipe(share());
  }
  //  return this.http.post(this.APIURL+url).pipe(share());
  //  return this.http.put(this.APIURL+url).pipe(share());

}
