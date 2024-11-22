import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FrameworkIconComponent } from "./framework-icon/framework-icon.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FrameworkIconComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
   isDropdownOpen = false;

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
