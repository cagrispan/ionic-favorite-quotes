import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.service';
import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes;

  constructor(
    private quotesService: QuotesService,
    private modalController: ModalController
  ) { }

  ionViewWillEnter() {
    this.loadQuotes();
  }

  loadQuotes() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalController.create(QuotePage, quote);
    modal.onDidDismiss(shouldRemove => {
      if (shouldRemove) {
        this.quotesService.removeQuoteToFavorites(quote);
      }
      this.loadQuotes();
    });
    modal.present();
  }

}
