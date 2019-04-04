import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: string[];

  constructor() { 
    this.tarefas = [];
  }

  adicionaTarefa(tarefa){
    this.tarefas.push(tarefa);
  }
  
  sizeLista() {
    return this.tarefas.length;
  }

  lista() {
    return this.tarefas;
  }
}
