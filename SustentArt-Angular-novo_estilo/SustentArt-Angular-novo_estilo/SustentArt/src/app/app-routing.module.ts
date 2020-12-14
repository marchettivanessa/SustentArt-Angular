import { TermosUsoComponent } from './termos-uso/termos-uso.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/HomeComponent';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FeedComponent } from './feed/feed.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutTemaComponent } from './put-tema/put-tema.component';



const routes: Routes = [
  
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component: HomeComponent },

  { path: 'feed', component: FeedComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'termos-uso', component: TermosUsoComponent},
  { path: 'post-tema', component: PostTemaComponent},
  { path: 'delete-post/:id', component: DeletePostagemComponent},
  { path: 'delete-tema/:id', component: DeleteTemaComponent},  
  { path: 'edita-post/:id', component: PutPostagemComponent },
  { path: 'editar-tema/:id', component: PutTemaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
