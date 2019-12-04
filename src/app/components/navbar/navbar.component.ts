import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isDetail = false;

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    if (this.route.url.includes('detail', 0)) {
      this.isDetail = true;
    } else {
      this.isDetail = false;
    }
  }

  goToHome() {
    this.route.navigateByUrl('home');
  }

  goToLogin() {
    this.route.navigateByUrl('login');
  }

}
