import { Data } from '@angular/router'
import { Tema } from './Tema'

export class Postagem {
    public id: number
    public titulo: string
    public descricao: string
    public data: Data
    public regiao: string
    public imagem: string
    public material: string
    public tema: Tema

}