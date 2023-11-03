import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkCategoryComponent } from './mark-category.component';

describe('MarkCategoryComponent', () => {
  let component: MarkCategoryComponent;
  let fixture: ComponentFixture<MarkCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkCategoryComponent]
    });
    fixture = TestBed.createComponent(MarkCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
