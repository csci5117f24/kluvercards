import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import {  onSnapshot } from 'firebase/firestore';

export default class DeckPageController extends Controller {
  // so we can track path changes.
  @service router;

  // we need a tracked for the most recent data
  @tracked deck = null;

  // and we need to track our "unsubscribe" function so we can call it as needed.
  unsubscribe_func = null;

  constructor() {
    super(...arguments);

    // when leaving the page, unsubscribe from changes.
    this.router.on('routeWillChange', (transition) => {
      if (!transition.to.find((route) => route.name === this.routeName)) {
        this.unsubscribe();
      }
    });

    // add listener whenever the model value changes.
    this.addObserver('model', this, 'modelChanged');
  }

  // called to remove the firebase subscription.
  unsubscribe() {
    if (this.unsubscribe_func) {
      // remove listener.
      this.unsubscribe_func();
      this.unsubscribe_func = null;
    }
  }

  // every time the model changes
  modelChanged() {
    // unsubscribe (just to be safe)
    this.unsubscribe();

    // re-subscribe to changes
    this.unsubscribe_func = onSnapshot(this.model.ref, (doc) => {
      this.deck = doc.data();
    });
  }
}
