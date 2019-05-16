import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormularioComponent } from './form/formulario/formulario.component';
import { TabelaComponent } from './form/tabela/tabela.component';
import { GraficoComponent } from './form/grafico/grafico.component';

import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormularioComponent,
    TabelaComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
