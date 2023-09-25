import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerunidadesComponent } from './verunidades.component';

describe('VerunidadesComponent', () => {
  let component: VerunidadesComponent;
  let fixture: ComponentFixture<VerunidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerunidadesComponent],
    });
    fixture = TestBed.createComponent(VerunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
