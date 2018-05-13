export class QuotesService {
  private favoriteQuotes = new Set();

  addQuoteToFavorites(quote) {
    this.favoriteQuotes.add(quote);
  }

  removeQuoteToFavorites(quote) {
    this.favoriteQuotes.delete(quote);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.values();
  }
}
