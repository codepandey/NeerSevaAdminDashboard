import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrandimageComponent } from './add-brandimage.component';

describe('AddBrandimageComponent', () => {
  let component: AddBrandimageComponent;
  let fixture: ComponentFixture<AddBrandimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBrandimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBrandimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
