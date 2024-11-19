import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {

}