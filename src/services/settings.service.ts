export class SettingsService {
  private alternativeBackground: boolean = false;

  setBackground(isAlternative) {
    this.alternativeBackground = isAlternative;
  }

  isAlternativeBackground(){
    return this.alternativeBackground;
  }

  getBackgroundColor(){
    return !this.alternativeBackground ? 'quote-primary' : 'quote-secondary';
  }
}
