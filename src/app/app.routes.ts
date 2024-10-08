import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
// const currentPath = window.location.pathname; 
// const language = currentPath.split('/')[1];

export const routes: Routes = [
  {
    path: 'it',
    children: [
      { path: '', component: HomeComponent },
      // { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      // { path: '**', redirectTo: '/home' },
    ],
  },
  {
    path: 'en',
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
  {
    path: 'br',
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
  {
    path: 'es',
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
  { path: '**', redirectTo: 'en' }, // Redireciona para inglês por padrão
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
