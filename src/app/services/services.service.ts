import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }


  public get (url:string){
    return this.http.get(url); //get https://reqres.in/api/users?page=2
  }

  public post (url:string, users:any){
    return this.http.post(url, users); //post https://reqres.in/api/users
  }

  public delete (url:string){
    return this.http.delete(url); //delete
  }
  public put (url:string, users:any){
    return this.http.post(url, users); //put
  }
}
