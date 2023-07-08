import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home-overview/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/caminho-da-pagina-inicial', pathMatch: 'full' },
  { path: 'caminho-da-pagina-inicial', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
