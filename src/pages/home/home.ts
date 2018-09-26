import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tapNr: number;
  pressNr: number;

  constructor(public navCtrl: NavController) {
    this.pressNr = 0;
    this.tapNr = 0
  }

  onTap() {
    console.log('Tapped');
    this.tapNr += 1;
  }

  onPress() {
    console.log('Pressed');
    this.pressNr += 1;
  }

  isGameWon() {
    return this.pressNr == 4 && this.tapNr == 2;
  }

  onDidReset(resetType: string) {
    switch (resetType) {
      case 'taps':
        this.tapNr = 0; break;
      case 'presses':
        this.pressNr = 0; break;
      case 'all':
        this.pressNr = 0;
        this.tapNr = 0;
        break;
    }
  }
}
