import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTemas(){
    return this.http.get('https://sustentart.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number){
    return this.http.get(`https://sustentart.herokuapp.com/tema/${id}`, this.token)
  }

  postTema(tema: Tema){
    return this.http.post('https://sustentart.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id:number){
    return this.http.delete(`https://sustentart.herokuapp.com/tema/${id}`, this.token)
  }
  
  putTema(tema: Tema){
    return this.http.put('https://sustentart.herokuapp.com/tema', tema, this.token)
  }

  getByNomeTema(conteudo : string){
    return this.http.get(`https://sustentart.herokuapp.com/tema/conteudo/${conteudo}`, this.token)

   }

   
}
