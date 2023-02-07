import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  constructor(private seller: SellerService, private router: Router) {}
  showLogin = false;
  autherror: string = '';
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data: SignUp): void {
    console.warn(data);
    this.seller.userSignUp(data);
  }
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
  login(data: SignUp): void {
    this.autherror = '';
    this.seller.userLogin(data);
    this.seller.isLoginerror.subscribe((isError) => {
      if (isError) {
        this.autherror = 'email or password is incorrect';
      }
    });
  }
}
