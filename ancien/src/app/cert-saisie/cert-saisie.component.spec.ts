import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertSaisieComponent } from './cert-saisie.component';

describe('CertSaisieComponent', () => {
  let component: CertSaisieComponent;
  let fixture: ComponentFixture<CertSaisieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertSaisieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertSaisieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
