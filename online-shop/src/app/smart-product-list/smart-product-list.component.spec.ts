import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartProductListComponent } from './smart-product-list.component';

describe('SmartProductListComponent', () => {
  let component: SmartProductListComponent;
  let fixture: ComponentFixture<SmartProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
