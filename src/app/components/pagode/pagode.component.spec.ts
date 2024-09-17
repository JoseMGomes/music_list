import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagodeComponent } from './pagode.component';

describe('PagodeComponent', () => {
  let component: PagodeComponent;
  let fixture: ComponentFixture<PagodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
