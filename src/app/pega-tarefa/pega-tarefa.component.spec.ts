import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegaTarefaComponent } from './pega-tarefa.component';

describe('PegaTarefaComponent', () => {
  let component: PegaTarefaComponent;
  let fixture: ComponentFixture<PegaTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegaTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegaTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
