import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsertypeComponent } from './add-usertype.component';

describe('AddUsertypeComponent', () => {
  let component: AddUsertypeComponent;
  let fixture: ComponentFixture<AddUsertypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUsertypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
