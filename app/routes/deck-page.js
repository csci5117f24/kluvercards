import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { doc, getDoc } from 'firebase/firestore';
import { action } from '@ember/object';

export default class DeckPageRoute extends Route {
  @service auth;
  @service decks;
  @service router;

  async model(params) {
    await this.auth.requireLogin();

    const docRef = doc(this.decks.decksRef, params.deck_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ref: docRef, data: docSnap.data() };
    } else {
      throw new Error('not found');
    }
  }

  @action
  error(err) {
    if (err.message === 'not found') {
      this.router.transitionTo('not_found');
    }
  }
}
