import { Component } from '@angular/core';
import { FrameworkIconComponent } from "./framework-icon/framework-icon.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FrameworkIconComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

}
