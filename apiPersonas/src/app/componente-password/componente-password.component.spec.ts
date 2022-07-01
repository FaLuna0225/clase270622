import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePasswordComponent } from './componente-password.component';

describe('ComponentePasswordComponent', () => {
  let component: ComponentePasswordComponent;
  let fixture: ComponentFixture<ComponentePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
