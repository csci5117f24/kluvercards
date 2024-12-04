import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { addDoc } from 'firebase/firestore';

export default class NewDeckButton extends Component {
  @service auth;
  @service decks;

  @tracked open = false;

  @tracked newDeck = '';

  @action
  openUp() {
    this.open = true;
  }

  @action doAdd() {
    this.open = false;
    addDoc(this.decks.decksRef, {
      owner: this.auth.user.uid,
      title: this.newDeck,
    });
  }
}
