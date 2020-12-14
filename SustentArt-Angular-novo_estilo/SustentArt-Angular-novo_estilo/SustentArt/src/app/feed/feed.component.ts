import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';
import { AlertasService } from './../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {

  faTrashAlt = faTrashAlt
  faEdit = faEdit
  faSearch = faSearch

  key = 'data'
  reverse = true

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema();
  listaTemas: Tema[];
  idTema: number;

  titulo: string
  conteudo: string
  regiao: string
  


  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    public auth: AuthService,
    private alert: AlertasService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.findAllPostagens()
    this.findAllTema()

    let token = environment.token

    if(token == ''){
      this.router.navigate(['/home'])
      this.alert.showAlertInfo('Faça o login antes de entrar.')
    }

  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    if (this.postagem.titulo == '' || this.postagem.descricao == '' || this.postagem.tema == null) {
      this.alert.showAlertDanger('Preencha todos os campos antes de publicar!')
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        this.postagem = new Postagem()
        this.alert.showAlertSuccess('Postagem realizada com sucesso!')
        this.findAllPostagens()
      })
    }
  }

  findAllTema() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  findByRegiaoPostagem() {
    if (this.regiao === '') {
      this.findAllPostagens()
    }
    else {
      this.postagemService.getByRegiaoPostagem(this.regiao).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp

      })
    }
  }

  findByNomeTema() {
    if (this.conteudo === '') {
      this.findAllTema()
    } else {
      this.temaService.getByNomeTema(this.conteudo).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })

    }

  }

  findByTituloPostagem() {
    if (this.titulo === '') {
      this.findAllPostagens()
    } else {
      this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp

      })
    }
  }

  

}

