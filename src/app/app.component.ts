import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currency = '$';
  form = this.fb.group({
    order: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

  productsData: any;
  // productsData = [
  //   {
  //     image: "1.png",
  //     title: "Бургер чедер & бекон",
  //     text: "Котлета з говядини кріспі, булочка, помідор, сир Чедер, грудинка, цибуля салат айзберг, майонез, кетчуп, сирний соус",
  //     price: 8,
  //     basePrice: 8,
  //     grams: 360
  //   },
  //   {
  //     image: "2.png",
  //     title: "Чізбургер класичний",
  //     text: "Котлета з яловичини, булочка, сир, маринована огіркова цукерка, кетчуп, гірчиця, цибуля, салат айзберг",
  //     price: 7.5,
  //     basePrice: 7.5,
  //     grams: 340
  //   },
  //   {
  //     image: "3.png",
  //     title: "Бургер BBQ",
  //     text: "Куряча котлета, булочка, бекон, цибуля, сир, солодкий BBQ соус, мариновані огірки, салат айзберг",
  //     price: 9.5,
  //     basePrice: 9.5,
  //     grams: 380
  //   },
  //   {
  //     image: "4.png",
  //     title: "Бургер гриль",
  //     text: "Свинина гриль, булочка, сир, гострий перець, цибуля, салат айзберг, мариновані огірки, кетчуп",
  //     price: 8.5,
  //     basePrice: 8.5,
  //     grams: 350
  //   },
  //   {
  //     image: "5.png",
  //     title: "Бургер мексиканський",
  //     text: "Котлета з яловичини, булочка, гострий перець, сир Чедер, авокадо, помідор, салат айзберг, часниковий соус",
  //     price: 9,
  //     basePrice: 9,
  //     grams: 370
  //   },
  //   {
  //     image: "6.png",
  //     title: "Бургер рибний",
  //     text: "Смажена рибна котлета, булочка, маринований огірок, цибуля, салат айзберг, тартарний соус",
  //     price: 7.8,
  //     basePrice: 7.8,
  //     grams: 320
  //   },
  //   {
  //     image: "7.png",
  //     title: "Бургер вегетаріанський",
  //     text: "Соєва котлета, булочка, томати, огірки, листя салату, гуакамоле, медовий гірчичний соус",
  //     price: 8.2,
  //     basePrice: 8.2,
  //     grams: 330
  //   },
  //   {
  //     image: "8.png",
  //     title: "Бургер BBQ свинина",
  //     text: "Свинина, булочка, цибуля, салат айзберг, мариновані огірки, сир, солодкий BBQ соус",
  //     price: 8.5,
  //     basePrice: 8.5,
  //     grams: 360
  //   },
  //   {
  //     image: "9.png",
  //     title: "Бургер тунцевий",
  //     text: "Смажений тунець, булочка, томати, листя салату, мариновані огірки, каперси, лимонний соус",
  //     price: 10,
  //     basePrice: 10,
  //     grams: 390
  //   },
  //   {
  //     image: "10.png",
  //     title: "Бургер гриль курка",
  //     text: "Куряча котлета, булочка, сир, гострий перець, цибуля, салат айзберг, мариновані огірки, кетчуп",
  //     price: 8.5,
  //     basePrice: 8.5,
  //     grams: 350
  //   },
  //   {
  //     image: "11.png",
  //     title: "Бургер гавайський",
  //     text: "Куряча котлета, булочка, сир, ананас, бекон, мариновані огірки, салат айзберг, BBQ соус",
  //     price: 9.5,
  //     basePrice: 9.5,
  //     grams: 380
  //   },
  //   {
  //     image: "12.png",
  //     title: "Бургер гриль говядина",
  //     text: "Говяжа котлета, булочка, сир, гострий перець, цибуля, салат айзберг, мариновані огірки, кетчуп",
  //     price: 9,
  //     basePrice: 9,
  //     grams: 370
  //   },
  // ];//any;

  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit() {
    this.appService.getData().subscribe((data) => (this.productsData = data));
  }

  scrollTo(target: HTMLElement, burger?: any) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  confirmOrder() {
    if (this.form.valid) {
      this.appService.sendOrder(this.form.value).subscribe({
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

  changeCurrency() {
    let newCurrency = '$';
    let coefficient = 1;
    // будем определять какая сейчас валюта
    if (this.currency === '$') {
      newCurrency = '₴';
      coefficient = 38;
    } else if (this.currency === '₴') {
      newCurrency = '€';
      coefficient = 3;
    } else if (this.currency === '€') {
      newCurrency = '¥';
      coefficient = 6.9;
    } else if (this.currency === '¥') {
      newCurrency = '£';
      coefficient = 0.9;
    }
    this.currency = newCurrency;

    this.productsData.forEach((item: any) => {
      item.price = +(item.basePrice * coefficient).toFixed(1);
    });
  }
}
  


