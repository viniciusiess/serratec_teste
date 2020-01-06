import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaConstrucaoComponent } from './pagina-construcao.component';

describe('PaginaConstrucaoComponent', () => {
  let component: PaginaConstrucaoComponent;
  let fixture: ComponentFixture<PaginaConstrucaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaConstrucaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaConstrucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
