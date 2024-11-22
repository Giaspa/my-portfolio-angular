import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSlimComponent } from './navbar-slim.component';

describe('NavbarSlimComponent', () => {
  let component: NavbarSlimComponent;
  let fixture: ComponentFixture<NavbarSlimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSlimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarSlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
