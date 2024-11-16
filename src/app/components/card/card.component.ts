import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() id: string ="";
  @Input() routerLink: string ="";
  @Input() imagePath: string ="";

  constructor(readonly router: Router){}

  isNotActive(): boolean {
    return !this.router.isActive(this.routerLink, true);
  }
}
