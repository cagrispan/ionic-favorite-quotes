import { Component, OnInit } from '@angular/core';
import { AlertController, NavParams } from 'ionic-angular';

import { QuoteGroup } from '../../data/quote-group.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: QuoteGroup;

  constructor(
    public navParams: NavParams,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(quote) {
    const alert = this.alertController.create({
      title: 'Favorite Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to favorite the quote?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('Cancel')
        },
        {
          text: 'Confirm',
          handler: () => console.log('Confirm')
        }
      ]
    });
    alert.present();
  }

}
