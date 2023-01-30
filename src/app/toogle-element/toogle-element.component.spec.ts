import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleElementComponent } from './toogle-element.component';

describe('ToogleElementComponent', () => {
  let component: ToogleElementComponent;
  let fixture: ComponentFixture<ToogleElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToogleElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
