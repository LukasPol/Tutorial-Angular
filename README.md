# Tutorial Angular

Bom, será feito um mini-tutorial em angular. Iremos fazer um sistema para tarefas diária, onde a pessoas digita suas tarefas e ao clicar nela poderá marcar como concluída ou não. :)

### Então, vamos ao código!!!

Minto, primeiro vamos criar a aplicação, pq sem não tem nenhum código. rsrs

Enfim..

```
ng new TarefasDiarias
```

Agora, senta e relaxa, se quiser fazer um café enquanto espera fique a vontade, aproveite e leve um copo para mim amanhã. kkkk

Já acabado de criar a aplicação, vamos criar uns componentes. Será um para pegar as tarefas e outro para mostrar.

```
ng g c pegaTarefa
ng g c mostraTarefa
```

Esse é mais rápido. Feito isso, vamos criar um serviço. Não sei se Bruno irá cobrar serviço, mas fique a vontade de fazer sem.

```
ng g s modelo/tarefas
```

## Pronto, agora sim vamos ao código.

### Sem serviço

Primeira coisa entrar no arquivo src>>app>>app.component.html e iremos apagar tudo e colocar..

````html
<h1>{{ title }}</h1>

<app-pega-tarefa></app-pega-tarefa>
```

`Obs.: Se criou o componente com nome diferente será diferente a tag...`

Agora iremos no arquivo app>>app.module.ts e vamos importar o `FormsModule`. Adicione as seguintes linhas..

```ts
// Na area de importação
// No meu ficou na linha 3
import { FormsModule } from '@angular/forms';

// Na parte de imports, linha 15
// Não esqueca de colocar virgula depois do BrowserModule
FormsModule
```

Agora vamos para os components.. Primeiro no `pega-tarefa`. Vamos no html dele e apagar tudo e inserir..

```html
<!-- pega-tarefa.component.html -->

<form>
  <input type="text" id="tarefa" #tarefa>
  <button (click)="adicionaTarefa(tarefa)">Adicionar</button>
</form>
```

Sei que fiz algumas coisas que Bruno não explicou, mas vou explicar, e dizer pq eu acho assim mais fácil..

Primeiro o seria `#tarefa`?? A '#' serve para declarar uma variável loca no html de um component. Só funciona no html e não no ts. No button foi criado um evento, quando clicar no botão será chamada determinada função, neste caso é "adicionaTarefa", que recebe a variável 'tarefa', eu não coloquei `.value`, mas fique a vontade, isso serve para recebe só o valor da variavel.

Espero que entendam.. kkk

Agora vamos criar a função no arquivo ts do component.

```ts
// arquivo pega-tarefa.component.ts

adicionaTarefa(tarefa){
    this.tarefas.push(tarefa.value);
    tarefa.value = '';
}
```

Se fizer isso, dara um erro.. tente descobri antes que fale.. kkk

Antes de dar a resposta.. eu coloquei a a linha `tarefa.value = ''` para no arq html apagar a ultima tarefa digitada e deixar vazia..

Senão conseguiu.. Era só declara uma variavel que será uma lista `tarefas`, então fica assim...

```ts
// arquivo pega-tarefa.component.ts
// Será uma lista de string
tarefas: string[];

constructor() { 
    this.tarefas = [];
}
```

Pronto, tarefas serão adicionadas.. agora vamos mostra-las.. no final do arquivo html adicione.

```html
<!-- pega-tarefa.component.html -->

<div *ngIf="sizeLista() > 0">
  <ul *ngFor="let tarefa of lista()">
    <li>{{ tarefa }}</li>
  </ul>
</div>
```

Pera Pol, o que foi feito?? 

Calma vou explicar, será colocada uma div caso o tamanho da lista for maior que '0'(zero), é o que o *ngIf está fazendo. Siim, ainda não foi criada a função `sizeLista()`. E caso a div for criada, será criada uma lista que mostrará as tarefas que estão na lista de tarefas, e foi usado o *ngFor para isso, e também não criamos a função lista().. mas enfim, tudo certo?? Espero que sim..

Vamos criar as funções que estão no html..

```ts
// arquivo pega-tarefa.component.ts

sizeLista(){
    return this.tarefas.length;
}

lista(){
    return this.tarefas;
}
```


### Com serviço

Agora tem muitas coisas feitas, iremos