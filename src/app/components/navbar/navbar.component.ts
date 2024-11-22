import { Component } from '@angular/core';
import { FrameworkIconComponent } from "./framework-icon/framework-icon.component";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarSlimComponent } from "./navbar-slim/navbar-slim.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FrameworkIconComponent, RouterLink, RouterLinkActive, CommonModule, NavbarSlimComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
