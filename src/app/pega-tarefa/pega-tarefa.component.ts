import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../modelo/tarefa.service';

@Component({
  selector: 'app-pega-tarefa',
  templateUrl: './pega-tarefa.component.html',
  styleUrls: ['./pega-tarefa.component.css']
})
export class PegaTarefaComponent implements OnInit {


  constructor( private t:TarefaService) { }

  ngOnInit() {
  }

  adicionaTarefa(tarefa){
    this.t.adicionaTarefa(tarefa.value);
    tarefa.value = '';
  }
}
