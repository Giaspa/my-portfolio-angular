import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { ExperienceComponent } from "./experience/experience.component";
import { Experience } from '../../../types/experience.model';
import { MOCK_ABOUT, About } from '../../../types/about.model';
import { CommonModule } from '@angular/common';
import { AssertItemComponent } from "./assert-item/assert-item.component";
import { HeaderComponent } from "../../components/header/header.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroComponent, ExperienceComponent, CommonModule, AssertItemComponent, HeaderComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  experiences?: Experience[];
  about: About = MOCK_ABOUT;

  constructor(private route: ActivatedRoute) {
    const resolverData = this.route.snapshot.data['experiences'] as { experiences?: Experience[]; about?: About } | null;
    
    if (resolverData) {
      this.experiences = resolverData.experiences ?? undefined;
      this.about = resolverData.about ?? MOCK_ABOUT;
      
      // Debug: verifica che i dati siano stati caricati
      if (resolverData.about) {
        console.log('✅ About data loaded from DB:', resolverData.about);
      } else {
        console.warn('⚠️ About data not available, using MOCK_ABOUT');
      }
    } else {
      console.warn('⚠️ Resolver data not available');
    }
  }
}
