import { environment } from './../../environments/environment.prod';
import { AlertasService } from './../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';



@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})
export class PostTemaComponent implements OnInit {
 
  faTrashAlt = faTrashAlt
  faEdit = faEdit

  tema: Tema = new Tema
  listaTema: Tema[]

  constructor(
    private temaService: TemaService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    this.findAllTema()
    let token = environment.token
  }

  findAllTema(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTema = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.tema.id).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  cadastrar(){
    if (this.tema.conteudo == ''){
      this.alert.showAlertDanger('Preencha o campo de nome do tema corretamente')
    } else {
      this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
        this.tema = resp
      this.router.navigate(['/feed'])
      this.alert.showAlertSuccess('Tema cadastrado com sucesso')
      })
    }
  }

  
}
