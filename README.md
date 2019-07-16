# Tutorial Angular

Bom, será feito um mini-tutorial em angular. Iremos fazer um sistema para tarefas diária, onde a pessoas digita suas tarefas e ao clicar nela poderá marcar como concluída ou não. :)

### Então, vamos ao código!!!

Minto, primeiro vamos criar a aplicação, pq sem não tem nenhum código. rsrs

Enfim..

```
ng new TarefasDiarias
```

Agora, senta e relaxa, se quiser fazer um café enquanto espera fique a vontade, aproveite

Já acabado de criar a aplicação, vamos criar uns componentes. Será um para pegar as tarefas e outro para mostrar.

```
ng g c pegaTarefa
ng g c mostraTarefa
```

Esse é mais rápido. Feito isso, vamos criar um serviço. Eu ensinarei a fazer com e sem serviço.

```
ng g s modelo/tarefas
```

## Pronto, agora sim vamos ao código.

### Sem serviço

Primeira coisa entrar no arquivo src>>app>>app.component.html e iremos apagar tudo e colocar..

```html
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

Pera que vou explicar oq siginifica aquelas hastags, não é para ganhar curtida, pera..

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

Já tem algumas coisas feitas, então iremos mudar de lugar, algumas coisas e acrescentar outras..

Primeiro vamos copiar todas as FUNÇÕES e as VARIÁVEIS do arquivo `pega-tarefa.component.ts` e colar no arquivo `modelo>>tarefa.service.ts`. E mudararemos a função adicionarTarefa(), tirando a ultima linha e tirando o tarefa.value. O arquivo ficará assim...

```ts
// arquivo tarefa.service.ts

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
```

Pronto, serviço está feito. Vamos colar as funções sizeLista() e lista() que estão no arquivo `pega-tarefa.component.ts` para o arquivo `mostra-tarefa.component.ts`, e vamos acrescentar a chamada do serviço neste arquivo. Ficará assim..

```ts
// arquivo mostra-tarefa.component.ts
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
}
```

No construtor estamos inicializando o serviço, que será chamado `t`. E nas funções utilizamos as funções do serviço, poderia no template já chamar a função do serviço sem precisar criar as duas função, mas utilizaremos a boa prática de cada template usar a função do seu componente :)

Agora mexeremos no arquivo `pega-tarefa.component.ts`. Primeiro apagaremos as variveis que existem e as funções sizeLista() e lista(). Ficará assim...

```ts
// arquivo pega-tarefa.component.ts
export class PegaTarefaComponent implements OnInit {

  constructor( private t:TarefaService) { }

  ngOnInit() {
  }

  adicionaTarefa(tarefa){
    this.t.adicionaTarefa(tarefa.value);
    tarefa.value = '';
  }
}
```

Agora iremos aos templates, arquivos html, primeiro mudaremos o template do mostra tarefa. Iremos mover uma parte do html do arquivo `pega-tarefa.component.html` para `mostra-tarefa.component.html`, o seguinte conteúdo.

```html
<!-- Colar no mostra-tarefa.component.html -->

<div *ngIf="sizeLista() > 0">
  <ul *ngFor="let t of lista()">
    <li>{{ t }}</li>
  </ul>
</div>
```

E no arquivo `pega-tarefa.component.html`, colocaremos a tag `<app-mostra-tarefa>`, no final do arquivo.

## Marcado ou não como concluída

Tua aplicação está feita. Só vamos deixar o usuário marca tarefa como concluída ou não, para isso vamos mexer no css. Vamos criar uma classe que colocará um risco na tarefa e mexerá na opacidade. E quando o usuário clicar no elemento, este recebá a classe.

No arquivo `mostra-tarefa.component.css`, e adicione o seguinte código.

```css
/* mostra-tarefa.component.css */
.end{
	/* Linha no meio da palavra */
	text-decoration: line-through;
	/* cor da linha */
	text-decoration-color: red;
	/* "Clareando a tarefa" */
    opacity: .7;
}
```

Agora vamos ao template, para criar um evento de quando clicar chamar uma função para colocar ou não a linha vermelha.

```html
<!-- mostra-tarefa.component.html -->

<div *ngIf="sizeLista() > 0">
  <ul *ngFor="let t of lista()">
    <li (click)="riscaTarefa(tarefaI)" #tarefaI>{{ t }}</li>
  </ul>
</div>
```

Então devemos criar a função riscaTarefa(), que receberá uma variável que é o proprio li. No arquivo `mostra-tarefa.component.ts`..

```ts
riscaTarefa(tarefa){
	let classes = tarefa.classList;
	if (classes.length === 0){
      tarefa.classList = 'end';
    } else {
      tarefa.classList = '';
    }
}
```

Criamos uma variável `classes` para receber todas as variáveis do elemento, depois verificamos a quantidade de variaveis do elemento, se for igual a 0, significa que ela não está marcada, então adicionará a classe end. Caso contrário, ficará sem nenhuma classe.


Pronto, finalizado o programa, caso rode meu programa está diferente do teu, pois fiz algumas outras alterações.. rsrs
