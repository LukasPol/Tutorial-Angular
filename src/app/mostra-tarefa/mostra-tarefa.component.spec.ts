import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraTarefaComponent } from './mostra-tarefa.component';

describe('MostraTarefaComponent', () => {
  let component: MostraTarefaComponent;
  let fixture: ComponentFixture<MostraTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostraTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
