import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getBreakDowns(){

    return this.http.get(environment.URL+"/home/breakDowns");
  }

  getMechanicians(){
    return this.http.post(environment.URL+"/home/mechanician",{long:-1.562891,lat:12.397187});
  }
}
