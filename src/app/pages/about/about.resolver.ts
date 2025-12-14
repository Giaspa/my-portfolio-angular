import { inject } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { Observable, forkJoin, map } from 'rxjs';
import { Experience } from '../../../types/experience.model';
import { About, transformAboutSectionsToAbout } from '../../../types/about.model';

export type AboutResolverData = {
  experiences: Experience[] | null;
  about: About | null;
};

export const aboutResolver: () => Observable<AboutResolverData> = () => {
  const supabase = inject(SupabaseService);
  
  return forkJoin({
    experiences: supabase.getAllExperience(),
    aboutSections: supabase.getAllAboutSection()
  }).pipe(
    map(({ experiences, aboutSections }) => ({
      experiences,
      about: aboutSections ? transformAboutSectionsToAbout(aboutSections) : null
    }))
  );
};
