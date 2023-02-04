import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFaisalComponent } from './user-faisal.component';

describe('UserFaisalComponent', () => {
  let component: UserFaisalComponent;
  let fixture: ComponentFixture<UserFaisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFaisalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFaisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
