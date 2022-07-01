import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePasaporteComponent } from './componente-pasaporte.component';

describe('ComponentePasaporteComponent', () => {
  let component: ComponentePasaporteComponent;
  let fixture: ComponentFixture<ComponentePasaporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentePasaporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePasaporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
