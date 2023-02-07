import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  popularProduct: product[] | undefined;
  trendyProduct: product[] | undefined;
  constructor(private product: ProductService) {}
  ngOnInit(): void {
    this.product.popularProducts().subscribe((result) => {
      console.log(result);
      this.popularProduct = result;
    });
    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProduct=data;
    });
  }
}
