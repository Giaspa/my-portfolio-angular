import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-framework-icon',
  standalone: true,
  imports: [],
  templateUrl: './framework-icon.component.html',
  styleUrl: './framework-icon.component.css'
})
export class FrameworkIconComponent {
  @Input() disabled: boolean = false
  @Input() title: string = ""
}
