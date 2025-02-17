import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreenchimentoDinamicoComponent } from './preenchimento-dinamico.component';

describe('PreenchimentoDinamicoComponent', () => {
  let component: PreenchimentoDinamicoComponent;
  let fixture: ComponentFixture<PreenchimentoDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreenchimentoDinamicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreenchimentoDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
