import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';
import { Observable } from 'rxjs';
import { Project } from '../../../types/project.model';

export const projectsResolver: () => Observable<Project[] | null>
  = () => {
    const supabase = inject(SupabaseService);
    return supabase.getAllProjects();
  };
