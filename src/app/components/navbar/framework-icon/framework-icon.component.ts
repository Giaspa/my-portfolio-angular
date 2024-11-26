import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-framework-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './framework-icon.component.html',
})
export class FrameworkIconComponent {
  @Input() link?: string | null;
  @Input() title: string = ""

  constructor(readonly router: Router) {
  }

  calcHref(): string{
    if(this.link){
      return `${this.link}${this.router.url}`
    }
    return ""
  }
}
