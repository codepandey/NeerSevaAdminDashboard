import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsertypeComponent } from './list-usertype.component';

describe('ListUsertypeComponent', () => {
  let component: ListUsertypeComponent;
  let fixture: ComponentFixture<ListUsertypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsertypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
