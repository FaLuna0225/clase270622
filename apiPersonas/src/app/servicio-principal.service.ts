import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrincipalService {

  constructor(private http:HttpClient) { }

  obtenerPasaporte(){
    return this.http.get("https://api.generadordni.es/v2/profiles/person")
  }

  obtenerUserName(){
    return this.http.get("https://api.generadordni.es/v2/person/username")
  }
  
  obtenerEmail(){
    return this.http.get("https://api.generadordni.es/v2/person/email")
  }

  obtenerPassword(){
    return this.http.get("https://api.generadordni.es/v2/person/password")
  }
}
