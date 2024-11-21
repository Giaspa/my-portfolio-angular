import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertItemComponent } from './assert-item.component';

describe('AssertItemComponent', () => {
  let component: AssertItemComponent;
  let fixture: ComponentFixture<AssertItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssertItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
