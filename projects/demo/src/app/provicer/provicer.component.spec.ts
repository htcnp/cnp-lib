import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvicerComponent } from './provicer.component';

describe('ProvicerComponent', () => {
  let component: ProvicerComponent;
  let fixture: ComponentFixture<ProvicerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvicerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvicerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
