import Service from '@ember/service';
import { service } from '@ember/service';
import { action, computed } from '@ember/object';
import { getFirestore } from 'firebase/firestore';
import { collection, doc, addDoc } from 'firebase/firestore';

export default class DecksService extends Service {
  @service firebase;
  @service auth;

  db = getFirestore(this.firebase.app);
  decksRef = collection(this.db, 'decks');

  @action
  newDeck(title) {
    addDoc(this.decksRef, {
      owner: this.auth.user.uid,
      title: title,
      cards: [],
    });
  }
}
