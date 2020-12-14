import { AlertasService } from './../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-put-postagem',
  templateUrl: './put-postagem.component.html',
  styleUrls: ['./put-postagem.component.css']
})
export class PutPostagemComponent implements OnInit {

  faShareSquare = faShareSquare

  postagem: Postagem = new Postagem()
  idPost: number

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  constructor(
    private temaService: TemaService,
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    this.idPost = this.route.snapshot.params["id"]
     this.findByIdPostagem(this.idPost)

    this.findAllTema()
  }


  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) =>{
      this.postagem = resp
    })
  }

  
salvar(){
  this.tema.id = this.idTema
  this.postagem.tema = this.tema

  this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) =>{
    this.postagem = resp
    this.router.navigate(['/feed'])
    this.alert.showAlertSuccess('Postagem alterada com sucesso!')
  }, error =>{
    if(error.status == '500'){
     this.alert.showAlertDanger('Preencha todos os campos antes de enviar!!')
    }

  })

}

 findAllTema(){
  this.temaService.getAllTemas().subscribe((resp: Tema[]) =>{
    this.listaTemas = resp
  })

 }
 findByIdTema(){
 this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
    this.tema = resp
  })

 }


}