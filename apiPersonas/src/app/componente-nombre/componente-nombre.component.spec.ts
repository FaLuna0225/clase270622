import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNombreComponent } from './componente-nombre.component';

describe('ComponenteNombreComponent', () => {
  let component: ComponenteNombreComponent;
  let fixture: ComponentFixture<ComponenteNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
