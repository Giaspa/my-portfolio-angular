import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FrameworkIconComponent } from "../framework-icon/framework-icon.component";

@Component({
  selector: 'app-navbar-slim',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, FrameworkIconComponent],
  templateUrl: './navbar-slim.component.html',
})
export class NavbarSlimComponent {
  isDropdownOpen = false;

  constructor(readonly router: Router) { }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  navigate(pageName: string) {
    this.closeDropdown();
    this.router.navigate([pageName]);
  }
}
