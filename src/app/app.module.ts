import { VisualizarFilmesComponent } from './filmes/visualizar-filmes/visualizar-filmes.component';
import { ListagemFilmesComponent } from './filmes/listagem-filmes/listagem-filmes.component';
import { CadastroFilmesComponent } from './filmes/cadastro-filmes/cadastro-filmes.component';
import { FilmesModule } from './filmes/filmes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { MaterialModule } from './shared/material/material.module';
import { TopoComponent } from './shared/components/topo/topo.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';
import { AlertaComponent } from './shared/components/alerta/alerta.component';


@NgModule({
    declarations: [
        AppComponent,
        TopoComponent,
        RodapeComponent,
        AlertaComponent,

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LayoutModule,
        MaterialModule,
        AppRoutingModule,

    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
