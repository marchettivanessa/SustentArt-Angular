import { AlertasService } from './../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = new User()
  senha: string
  termoUso = false
  cadastroOk = false
  confSenha: string
  checkOk = false

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    
  }

  ok(event)
  {
    this.checkOk = event.target.checked
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
    
    
  }

  conferirSenhaDois(event)
  {
    this.confSenha = event.target.value
  
    if (this.senha == this.confSenha && this.checkOk) {

      this.cadastroOk = true
    }
  }

  cadastrar() {

    if (this.senha != this.user.senha) {
      this.alert.showAlertDanger('Senhas não conferem !')
      document.getElementById("senha").focus()
    } else if (this.termoUso == false) {
      this.alert.showAlertDanger('Por Favor, Concorde com os termos de uso para avançar !')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.alert.showAlertSuccess('Cadastrado realizado com sucesso !')
      }, error => {
        if (error.status == 400)
        {
          this.alert.showAlertDanger(" E-mail ja esta cadastrado! ")
        }
      })
    }
  }


}


