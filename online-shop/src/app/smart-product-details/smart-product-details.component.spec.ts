import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartProductDetailsComponent } from './smart-product-details.component';

describe('SmartProductDetailsComponent', () => {
  let component: SmartProductDetailsComponent;
  let fixture: ComponentFixture<SmartProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SmartProductDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
