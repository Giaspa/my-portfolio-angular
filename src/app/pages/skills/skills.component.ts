import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { SkillAndPath, SkillByGroup, SKILLS_N_PATH, SKILLS_N_PATH_BY_GROUP } from '../../../types/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  skillGroup: SkillByGroup[] = SKILLS_N_PATH_BY_GROUP
}
