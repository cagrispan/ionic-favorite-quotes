import { Component, OnInit } from '@angular/core';
import { AlertController, NavParams } from 'ionic-angular';

import { QuoteGroup } from '../../data/quote-group.interface';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: QuoteGroup;

  constructor(
    public navParams: NavParams,
    public alertController: AlertController,
    public quotesService: QuotesService,
  ) { }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  isQuoteFavorite(quote) {
    return this.quotesService.isQuoteFavorite(quote);
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
          handler: () => this.quotesService.addQuoteToFavorites(quote)
        }
      ]
    });
    alert.present();
  }

  onRemoveToFavorite(quote) {
    const alert = this.alertController.create({
      title: 'Unfavorite Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to unfavorite the quote?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => this.quotesService.removeQuoteToFavorites(quote)
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('Cancel')
        }
      ]
    });
    alert.present();
  }

}
