import { Injectable } from '@angular/core';
import { createClient, PostgrestSingleResponse, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environment';
import { Experience } from '../../types/experience.model';
import { from, map, Observable } from 'rxjs';
import { Skill } from '../../types/skill.model';
import { Project } from '../../types/project.model';
import { AboutSection } from '../../types/about.model';

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
    const query = this.supabase
      .from('Experience').select()

    return from(query).pipe(
      map((res: PostgrestSingleResponse<Experience[]>) => {
        if (res.error) {
          console.error("🚀 ~ SupabaseService ~ map ~ res.error:", res.error)
          return null;
        }

        if (!res.data) return null;

        // Ordina per whenFrom (data più recente prima)
        return res.data.sort((a, b) => {
          const dateA = this.parseDateString(a.whenFrom);
          const dateB = this.parseDateString(b.whenFrom);
          return dateB.getTime() - dateA.getTime(); // Ordine decrescente (più recente prima)
        });
      })
    )
  }

  private parseDateString(dateStr: string): Date {
    // Mappa dei mesi italiani abbreviati
    const monthMapIt: { [key: string]: number } = {
      'gen': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'mag': 4, 'giu': 5,
      'lug': 6, 'ago': 7, 'set': 8, 'ott': 9, 'nov': 10, 'dic': 11
    };

    // Mappa dei mesi inglesi abbreviati
    const monthMapEn: { [key: string]: number } = {
      'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'may': 4, 'jun': 5,
      'jul': 6, 'aug': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11
    };

    const parts = dateStr.trim().split(' ');
    if (parts.length !== 2) {
      // Se il formato non è corretto, ritorna una data molto vecchia
      return new Date(0);
    }

    const monthStr = parts[0].toLowerCase();
    const year = parseInt(parts[1], 10);

    // Prova prima con i mesi italiani, poi con quelli inglesi
    const month = monthMapIt[monthStr] ?? monthMapEn[monthStr] ?? 0;

    return new Date(year, month, 1);
  }

  getAllSkills(): Observable<Skill[] | null> {
    return this.getAllGenerics<Skill>('Skill')
  }

  getAllProjects(): Observable<Project[] | null> {
    const query = this.supabase
      .from('Project').select()

    return from(query).pipe(
      map((res: PostgrestSingleResponse<Project[]>) => {
        if (res.error) {
          console.error("🚀 ~ SupabaseService ~ map ~ res.error:", res.error)
          return null;
        }

        if (!res.data) return null;

        // Ordina per dateFrom (data più recente prima)
        return res.data.sort((a, b) => {
          const dateA = this.parseDateString(a.dateFrom);
          const dateB = this.parseDateString(b.dateFrom);
          return dateB.getTime() - dateA.getTime(); // Ordine decrescente (più recente prima)
        });
      })
    )
  }

  getAllAboutSection(): Observable<AboutSection[] | null> {
    const query = this.supabase
      .from('AboutSection').select()

    return from(query).pipe(
      map((res: PostgrestSingleResponse<AboutSection[]>) => {
        if (res.error) {
          console.error("🚀 ~ SupabaseService ~ map ~ res.error:", res.error)
          return null;
        }

        if (!res.data) return null;

        // Ordina per sectionKey e poi per order
        return res.data.sort((a, b) => {
          if (a.sectionKey !== b.sectionKey) {
            return a.sectionKey.localeCompare(b.sectionKey);
          }
          return a.order - b.order;
        });
      })
    )
  }
}
