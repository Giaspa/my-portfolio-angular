import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {

}
