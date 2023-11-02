import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxItemPriceComponent } from './box-item-price.component';

describe('BoxItemPriceComponent', () => {
  let component: BoxItemPriceComponent;
  let fixture: ComponentFixture<BoxItemPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxItemPriceComponent]
    });
    fixture = TestBed.createComponent(BoxItemPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
