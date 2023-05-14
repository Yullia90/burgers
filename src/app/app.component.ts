import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = this.fb.group({
    order: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

  productsData = [
    {
image:
    }
  ]

  constructor(private fb: FormBuilder) {}
  scrollTo(target: HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  confirmOrder() {
    if (this.form.valid) {
      alert('Спасибо за заказ!');
      this.form.reset();
    }
  }
}
