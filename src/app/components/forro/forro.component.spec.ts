import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForroComponent } from './forro.component';

describe('ForroComponent', () => {
  let component: ForroComponent;
  let fixture: ComponentFixture<ForroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
