import { Injectable } from '@angular/core';
import { createClient, PostgrestSingleResponse, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environment';
import { Experience } from '../../types/experience.model';
import { from, map, Observable } from 'rxjs';
import { Skill } from '../../types/skill.model';
import { Project } from '../../types/project.model';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient
  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  private getAllGenerics<T extends { id: number }>(supabaseEntity: string): Observable<T[] | null> {
    const query = this.supabase
      .from(supabaseEntity).select()

    return from(query).pipe(
      map((res: PostgrestSingleResponse<T[]>) => {
        if (res.error) {
          console.error("🚀 ~ SupabaseService ~ map ~ res.error:", res.error)

          return null;
        }

        return res.data.sort((a, b) => a.id - b.id)
      })
    )
  }

  getAllExperience(): Observable<Experience[] | null> {
    return this.getAllGenerics<Experience>('Experience')
  }

  getAllSkills(): Observable<Skill[] | null> {
    return this.getAllGenerics<Skill>('Skill')
  }

  getAllProjects(): Observable<Project[] | null> {
    return this.getAllGenerics<Project>('Project')
  }
}
