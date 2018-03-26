import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategsComponent } from './categs.component';

describe('CategsComponent', () => {
  let component: CategsComponent;
  let fixture: ComponentFixture<CategsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
