import { inject } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { Observable } from 'rxjs';
import { Experience } from '../../../types/experience.model';

export const aboutResolver: () => Observable<Experience[] | null> = () => {
  const supabase = inject(SupabaseService)
  return supabase.getAllExperience();
};
