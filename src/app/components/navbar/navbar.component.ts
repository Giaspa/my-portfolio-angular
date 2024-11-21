import { Component } from '@angular/core';
import { FrameworkIconComponent } from "./framework-icon/framework-icon.component";
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FrameworkIconComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
