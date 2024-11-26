import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSlimComponent } from "./navbar-slim/navbar-slim.component";
import { FrameworkIconComponent } from "./framework-icon/framework-icon.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarSlimComponent, FrameworkIconComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
