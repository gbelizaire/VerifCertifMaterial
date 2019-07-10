import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VerifService {
  private baseUrl:String="http://192.168.27.168:3000/dossiers/";
  //private baseUrl:String="http://172.20.10.5:3000/dossiers/";
  //http://172.20.10.5
   constructor(private http_:HttpClient) { }
 
   get_dossier(Matricule:string){
    return this.http_.get(this.baseUrl+'/'+Matricule);
   }
}
