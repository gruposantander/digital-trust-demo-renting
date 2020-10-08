import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: RentingProfileComponent;
  let fixture: ComponentFixture<RentingProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
