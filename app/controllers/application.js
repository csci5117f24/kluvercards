import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { onSnapshot, query, where } from 'firebase/firestore';

export default class ApplicationController extends Controller {
  @service auth;
  @service decks;
  @service router;

  @tracked stackTitle;

  @tracked data = [];

  unsubscribe = null

  @action
  refreshDeckListener(user) {
    console.log("goodby!")
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }

    if (user) {
      const ref = query(
        this.decks.decksRef,
        where('owner', '==', user.uid),
      );

      this.unsubscribe = onSnapshot(ref, (querySnapshot) => {
        // for lists, each "change" has a bunch of data elements in it.
        // loop over them and pull the data out.
        this.data = [];
        querySnapshot.forEach((doc) => {
          const dat = doc.data();
          dat['id'] = doc.id;
          this.data.push(dat);
        });
        console.log(this.data);
      });
    }
  }
}
