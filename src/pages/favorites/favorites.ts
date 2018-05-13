import { Component } from '@angular/core';

import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes;

  constructor(private quotesService: QuotesService) { }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

}
