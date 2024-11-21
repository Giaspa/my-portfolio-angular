import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AboutService } from '../about.service';
import { About, MOCK_ABOUT } from '../../../../types/about.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assert-item',
  standalone: true,
  imports: [],
  templateUrl: './assert-item.component.html',
})
export class AssertItemComponent {
  @Input() key?: keyof About;
  @ViewChild('focusbutton') focusbutton!: ElementRef<HTMLButtonElement>
  nextkey?: keyof About;
  message: string = "More...";
  currentIndex: number = 0;
  showTabsKeys!: (keyof About)[];

  constructor(readonly service: AboutService, readonly router: Router) { }

  ngOnInit() {
    this.showTabsKeys = Object.keys(this.service.getShowTabs()) as (keyof About)[];
    const currIndex = this.showTabsKeys.indexOf(this.key!);
    this.currentIndex = currIndex;
    this.message = this.getMessage()
    this.nextkey = this.findNextKey();
  }

  ngAfterViewInit() {
    if (this.focusbutton && (this.currentIndex < 0 || this.currentIndex > 1)) {
      setTimeout(() => {
        this.focusbutton.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
    }
  }

  findList(): string[] {
    return this.key ? MOCK_ABOUT[this.key] : [];
  }

  findNextKey(): keyof About | undefined {
    if (this.currentIndex >= 0 && this.currentIndex < this.showTabsKeys.length - 1) {
      const next = this.showTabsKeys[this.currentIndex + 1];
      return next;
    }

    return undefined;
  }

  showNext() {
    if (this.key) {
      this.service.toggleTabStatus(this.key)

    } else {
      this.router.navigate(['contacts'])
    }
  }

  getMessage(): string {
    switch (this.currentIndex) {
      case -1: return "Let's just connect!";
      case 4: return "Seriously? Ok... more!";
      case 3: return "How curious! Fine, more...";
      default: return "More...";
    }
  }
}
