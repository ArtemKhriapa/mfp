import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import { CardService} from "../services/card.service";
import { MatSnackBar } from "@angular/material";
import {Card} from "../models/card";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Validators } from "@angular/forms";

import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ CardService ]
})
export class HomeComponent implements OnInit {

  baseUrl: string = environment.apiUrl;

  account: User = new User();
  userSub: Subscription;
  cards;
  companies;
  tags;
  categories = ['Business', 'Discount', 'Flyer']
  selectedCard: Card;
  cardInput: FormGroup;
  isAddEditMode: boolean;
  isEdit: boolean;
  fileToUpload: File = null;
  imageUrl: string = "/static/images/default-image.png";
  uploader: FileUploader = new FileUploader({ url: this.baseUrl + 'cards/newcard/', removeAfterUpload: false, autoUpload: true });





  constructor(private global: GlobalService, private router: Router, private cardService: CardService, private fb: FormBuilder, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userSub = this.global.user.subscribe(
      me => this.account = me
    );
    if ( localStorage.getItem('token') && localStorage.getItem('account')) {
      this.global.me = JSON.parse(localStorage.getItem('account'));
      this.getCards();
      this.getCompany();
    } else {
      this.router.navigate(['/login']);
    }
    this.isAddEditMode = false;
    this.isEdit = false;
    this.cardInput = this.fb.group({
      card_name: ['', Validators.required],
      categoryControl: ['Discount'],
      description: ['', Validators.required],
      companyControl: [this.companies, Validators.required],
      image_front: null,
      tags:[this.tags, Validators.required]

    });

  }

  getCompany() {
    this.cardService.getCompany().subscribe(
      response => {
        this.companies = response;
      },
      error => {
        this.snackBar.open('Error getting Companies', '', { duration: 3000 });
      }
    );
  }

  getCards() {
    this.cardService.getCards().subscribe(
      response => {
        this.cards = response;
      },
      error => {
        this.snackBar.open('Error getting Cards', '', { duration: 3000 });
      }
    );
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {

        this.cardInput.get('image_front').setValue(reader.result.toString().split(',')[1]);

      }
    }
  }

  submitCard() {
    if (this.isEdit) {
      this.cardService.editCard(this.cardInput.value, this.selectedCard.card_id).subscribe(
        response => {
          const cardIndx = this.cards.map(function(e) {return e.id; }).indexOf(this.selectedCard.card_id);
          if (cardIndx >= 0) {
            this.cards[cardIndx] = response;
            this.selectedCard = response;
          }
          this.cardInput.reset();
          this.isAddEditMode = false;
        },
        error => {
          this.snackBar.open('Error edit card', '', { duration: 3000 });
          console.log(error)
        }
      );
    } else {
      this.cardService.addCard(this.cardInput.value).subscribe(
        response => {
          console.log(this.cards);
          this.cards.push(response);
          console.log(response);
          this.cardInput.reset();
          this.isAddEditMode = false;
        },
        error => {
          this.snackBar.open('Error adding card', '', { duration: 3000 });
          console.log(error)
        }
      );
    }
  }
  editCardClicked() {
    this.isEdit = true;
    this.isAddEditMode = true;
    this.cardInput = this.fb.group({
      card_name: ['', Validators.required],
      categoryControl: ['Discount'],
      description: ['', Validators.required],
      companyControl: [this.companies, Validators.required],
      image_front: ['', Validators.required],
      tags:['', Validators.required]
    });
  }

  addCardClicked() {
    this.isEdit = false;
    this.isAddEditMode = true;
    this.selectedCard = null;
    this.cardInput.reset();
  }


  cardClicked(card: Card) {
    this.selectedCard = card;
    this.isAddEditMode = false;
  }

  logoutClicked() {
    this.global.me = new User();
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    this.router.navigate(['/login']);
  }

  deleteCardClicked() {
    this.cardService.deleteCard(this.selectedCard.card_id).subscribe(
      response => {
        const cardIndx = this.cards.map(function(e) {return e.card_id; }).indexOf(this.selectedCard.card_id);
        if (cardIndx >= 0) {
          this.cards.splice(cardIndx, 1);
          this.selectedCard;
        }
        this.isAddEditMode = false;
      },
      error => {
        this.snackBar.open('Error deleting Card', '', { duration: 3000 });
      }
    );
  }





  clearFile() {
    this.cardInput.get('image_front').setValue(null);
  }





}
