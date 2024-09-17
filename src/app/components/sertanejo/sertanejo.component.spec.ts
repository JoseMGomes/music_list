import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SertanejoComponent } from './sertanejo.component';

describe('SertanejoComponent', () => {
  let component: SertanejoComponent;
  let fixture: ComponentFixture<SertanejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SertanejoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SertanejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
