import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  quote: Quote;

  constructor(
    private viewController: ViewController,
    private navParams: NavParams,
  ) { }

  onClose(shouldRemove = false) {
    this.viewController.dismiss(shouldRemove);
  }

  ionViewDidLoad() {
    this.quote = this.navParams.data;
  }

}
