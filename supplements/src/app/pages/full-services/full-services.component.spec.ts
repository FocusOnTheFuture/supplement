import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullServicesComponent } from './full-services.component';

describe('FullServicesComponent', () => {
  let component: FullServicesComponent;
  let fixture: ComponentFixture<FullServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullServicesComponent]
    });
    fixture = TestBed.createComponent(FullServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
