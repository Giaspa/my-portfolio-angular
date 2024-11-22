import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { ExperienceComponent } from "./experience/experience.component";
import { Experience, MOCK_EXPERIENCES } from '../../../types/experience.model';
import { MOCK_ABOUT, About } from '../../../types/about.model';
import { CommonModule } from '@angular/common';
import { AssertItemComponent } from "./assert-item/assert-item.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroComponent, ExperienceComponent, CommonModule, AssertItemComponent, HeaderComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  experiences: Experience[] = MOCK_EXPERIENCES;
  about: About = MOCK_ABOUT;
}
