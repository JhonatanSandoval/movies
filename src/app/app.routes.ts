import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { ListaGenerosComponent } from "./components/generos/lista-generos/lista-generos.component";
import { FormGenerosComponent } from "./components/generos/form-generos/form-generos.component";
import { FormMoviesComponent } from "./components/movies/form-movies/form-movies.component";

const app_routes: Routes = [
     { path:'', component: HomeComponent },
     { path:'about', component: AboutComponent },

     { path:'movies', component: MoviesComponent },
     { path:'movies/new', component: FormMoviesComponent },
     { path:'movies/:pelicula_id/edit', component: FormMoviesComponent },

     { path:'generos', component: ListaGenerosComponent },
     { path:'generos/new', component: FormGenerosComponent },
     { path:'generos/:genero_id/edit', component: FormGenerosComponent },
     { path: '**', pathMatch: "full", redirectTo: '' }
]

export const app_routing = RouterModule.forRoot(app_routes);