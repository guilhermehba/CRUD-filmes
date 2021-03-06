import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { MaterialModule } from "../shared/material/material.module";

import { CamposModule } from "../shared/components/campos/campos.module";
import { CadastroFilmesComponent } from "./cadastro-filmes/cadastro-filmes.component";
import { ListagemFilmesComponent } from "./listagem-filmes/listagem-filmes.component";
import { VisualizarFilmesComponent } from "./visualizar-filmes/visualizar-filmes.component";

@NgModule({
  declarations: [
    CadastroFilmesComponent,
    ListagemFilmesComponent,
    VisualizarFilmesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    InfiniteScrollModule,
  ],

})
export class FilmesModule {}
