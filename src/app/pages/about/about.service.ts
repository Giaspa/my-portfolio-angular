import { Injectable } from '@angular/core';
import { About } from '../../../types/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private showTabs: Record<keyof About, boolean> = {
    a_who: true,
    b_when: false,
    c_so: false,
    d_learn: false,
    e_and: false,
  }

  constructor() { }

  getShowTabs(): Record<keyof About, boolean>{
    return this.showTabs
  }

  getTabStatus(key: keyof About) {
    return this.showTabs[key]
  }

  toggleTabStatus(key: keyof About): void {
    this.showTabs = { ...this.showTabs, [key]: !this.showTabs[key] };
  }
}
