import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSlimComponent } from "./navbar-slim/navbar-slim.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarSlimComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
