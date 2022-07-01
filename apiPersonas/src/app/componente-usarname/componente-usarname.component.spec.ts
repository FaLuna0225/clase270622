import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteUsarnameComponent } from './componente-usarname.component';

describe('ComponenteUsarnameComponent', () => {
  let component: ComponenteUsarnameComponent;
  let fixture: ComponentFixture<ComponenteUsarnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteUsarnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteUsarnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
