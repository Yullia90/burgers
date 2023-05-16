import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  form = this.fb.group({
    order: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

<<<<<<< HEAD
  productsData: any; 

  constructor(private fb: FormBuilder, private appService: AppService) { }
  
  ngOnInit({
    this.appService.getData().subscribe(data => this.productsData = data);
  })
  
  scrollTo(target: HTMLElement, burger?: any) {
=======
  productsData = [
    {
image:
    }
  ]

  constructor(private fb: FormBuilder) {}
  scrollTo(target: HTMLElement) {
>>>>>>> parent of 510bb04 (add Type)
    target.scrollIntoView({ behavior: 'smooth' });
  }

  confirmOrder() {
    if (this.form.valid) {
      this.appService.sendOrder(this.form.value)
        .subscribe({
          next: (response: any) => {
             alert(response.message);
             this.form.reset();
        },
          error: (response) => {
          alert(response.error.message);
        },
      });
    }
  }
}
function confirmOrder() {
  throw new Error('Function not implemented.');
}

function changeCurrency() {
  throw new Error('Function not implemented.');
}

