import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PegaTarefaComponent } from './pega-tarefa/pega-tarefa.component';
import { MostraTarefaComponent } from './mostra-tarefa/mostra-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    PegaTarefaComponent,
    MostraTarefaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
