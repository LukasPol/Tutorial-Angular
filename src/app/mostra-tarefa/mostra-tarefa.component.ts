import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../modelo/tarefa.service';

@Component({
  selector: 'app-mostra-tarefa',
  templateUrl: './mostra-tarefa.component.html',
  styleUrls: ['./mostra-tarefa.component.css']
})
export class MostraTarefaComponent implements OnInit {

  constructor(private t: TarefaService) { }

  ngOnInit() {
  }

  sizeLista() {
    return this.t.sizeLista();
  }

  lista() {
    return this.t.lista();
  }
  
  riscaTarefa(tarefa){
    let classes = tarefa.classList;
    if (classes.length === 0){
      tarefa.classList = 'end';
    } else {
      tarefa.classList = '';
    }
  }
  
}
