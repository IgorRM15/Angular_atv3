import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { AcessoDeLoginComponent } from './component/acesso-de-login/acesso-de-login.component';

const routes: Routes = [
  { path: '', component: MainComponent },  // Adicione o sinal de igual e a vírgula aqui
  { path:'acesso', component: AcessoDeLoginComponent }  // Adicione o sinal de igual e a vírgula aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

