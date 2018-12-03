import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import { CardService} from "../services/card.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ CardService ]
})
export class HomeComponent implements OnInit {

  account: User = new User();
  userSub: Subscription;
  cards;


  constructor(private global: GlobalService, private router: Router, private cardService: CardService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userSub = this.global.user.subscribe(
      me => this.account = me
    );
    if ( localStorage.getItem('token') && localStorage.getItem('account')) {
      this.global.me = JSON.parse(localStorage.getItem('account'));
      this.getCards();
    } else {
      this.router.navigate(['/login']);
    }
  }

  getCards() {
    this.cardService.getCards().subscribe(
      response => {
        this.cards = response;
      },
      error => {
        this.snackBar.open('Error getting Movies', '', { duration: 3000 });
      }
    );
  }

  logoutClicked() {
    this.global.me = new User();
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    this.router.navigate(['/login']);
  }

}
