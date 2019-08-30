import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsertypeComponent } from './edit-usertype.component';

describe('EditUsertypeComponent', () => {
  let component: EditUsertypeComponent;
  let fixture: ComponentFixture<EditUsertypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUsertypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
