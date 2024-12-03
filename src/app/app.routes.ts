import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { aboutResolver } from './pages/about/about.resolver';
import { skillsResolver } from './pages/skills/skills.resolver';
import { projectsResolver } from './pages/projects/projects.resolver';

export const routes: Routes = [
  { path: "",
    pathMatch: 'full',
    redirectTo: "about"
  },
  {
    path: "about",
    component: AboutComponent,
    resolve: {
      experiences: aboutResolver
    }
  },
  {
    path: "projects",
    component: ProjectsComponent,
    resolve: {
      projects: projectsResolver
    }
  },
  {
    path: "skills",
    component: SkillsComponent,
    resolve: {
      skills: skillsResolver
    }
  },
  {
    path: "contacts",
    component: ContactsComponent
  },

];
