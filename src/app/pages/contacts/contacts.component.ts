import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environment';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [HeroComponent, FormsModule, CommonModule],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
  isSent: boolean = false;
  hasError: boolean = false;

  hasInputError(form: NgForm, name: string): boolean {
    return form.controls[name]?.invalid && form.controls[name]?.touched
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { email, object, body } = form.value;

      emailjs.send(
        environment.emailServiceId,
        environment.emailTemplateId,
        { reply_to: email, subject: object, message: body },
        environment.emailUserId
      )
        .then((result: EmailJSResponseStatus) => {
          this.isSent = true;
          this.hasError = false;
        })
        .catch((error) => {
          this.isSent = false;
          this.hasError = true;
        });

    } else {
      this.isSent = false;
      this.hasError = false;

      Object.keys(form.controls).forEach(name => form.controls[name].markAsTouched())
    }

  }

  onRetry(event: any, form: NgForm) {
    event.preventDefault();

    form.reset();
    this.isSent = false;
    this.hasError = false;
  }
}
