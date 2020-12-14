import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(userLogin: UserLogin){
    return this.http.post('https://sustentart.herokuapp.com/usuarios/login', userLogin)

  }

  cadastrar(user: User)
  {
    return this.http.post('https://sustentart.herokuapp.com/usuarios/cadastrar', user)
  }

  btnSair(){

    let ok = false
    let token = environment.token

    if(token != ''){
      ok = true

    }
    return ok

  }
  btnLogin(){
    let ok = false
    let token = environment.token

    if(token == ''){
      ok = true

    }
    return ok

  }
  adm(){
    let ok = true
    let email = environment.email
    if (email.indexOf('@adm.com') == -1){
      ok = false
    } 
    return ok
  }

  // chamar nome
  nomeUser()
  {
    let nome = environment.nome 
    return nome
  }
}
