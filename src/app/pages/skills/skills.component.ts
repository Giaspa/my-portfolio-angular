import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { SkillByGroup, SKILLS_N_PATH_BY_GROUP } from '../../../types/skill.model';
import { HeaderComponent } from "../../components/header/header.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [HeroComponent, HeaderComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  skillGroup!: SkillByGroup[];

  constructor(readonly route: ActivatedRoute){
    const skills = this.route.snapshot.data['skills'];

    this.skillGroup = SKILLS_N_PATH_BY_GROUP(skills)
  }
}
