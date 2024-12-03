import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';
import { Observable } from 'rxjs';
import { Skill } from '../../../types/skill.model';

export const skillsResolver: () => Observable<Skill[] | null> = () => {
  const supabase = inject(SupabaseService);
  return supabase.getAllSkills();
};
