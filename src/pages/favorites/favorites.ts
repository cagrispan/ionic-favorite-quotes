import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.service';
import { SettingsService } from '../../services/settings.service';
import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes;
  backgroundColor;

  constructor(
    private quotesService: QuotesService,
    private settingsService: SettingsService,
    private modalController: ModalController
  ) { }

  ionViewDidEnter() {
    this.loadQuotes();
  }

  loadQuotes() {
    this.quotes = this.quotesService.getFavoriteQuotes();
    this.backgroundColor = this.settingsService.getBackgroundColor();
    console.log(this.backgroundColor);
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

  removeQuote(quote: Quote) {
    this.quotesService.removeQuoteToFavorites(quote);
    this.loadQuotes();
  }

}
