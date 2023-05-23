import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css']
})
export class ReqresComponent {
  constructor (private ServicesService:ServicesService){

  }
  ngOnInit(): void{
    this.get();
    this.put();
    this.post();
    this.delete();
  }
  public get(){
    this.ServicesService.get('https://reqres.in/api/users?page=2').subscribe
    (respuesta=>{
      window.alert(JSON.stringify(respuesta))
    })
  }

  public post(){
    const users={
        "name": "morpheus",
        "job": "leader"
    }

    this.ServicesService.post('https://reqres.in/api/users',users).subscribe
    (respuesta=>{
      window.alert(JSON.stringify(respuesta))
    })
  }

  public delete(){
    this.ServicesService.delete('https://reqres.in/api/users/2').subscribe
    (respuesta=>{
      window.alert(JSON.stringify(respuesta))
    })
  }
  public put(){
    const users={
      "name": "morpheus",
      "job": "zion resident"
  }
    this.ServicesService.put('https://reqres.in/api/users/2',users).subscribe
    (respuesta=>{
      window.alert(JSON.stringify(respuesta))
    })
  }
}
