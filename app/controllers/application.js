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

  // This looks pretty complicated, but it's not too bad if you understand
  // it in steps. This approach only works for "global" queries though.
  async init() {
    super.init(...arguments);

    // 1) make sure we have auth info
    await this.auth.ensureInitialized();

    // 2) setup the query
    const ref = query(
      this.decks.decksRef,
      where('owner', '==', this.auth.user.uid),
    );

    // 3) subscribe to changes
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      // for lists, each "change" has a bunch of data elements in it.
      // loop over them and pull the data out.
      this.data = [];
      querySnapshot.forEach((doc) => {
        const dat = doc.data()
        dat['id'] = doc.id
        this.data.push(dat);
      });
      console.log(this.data)
    });

    // 4) when leaving the page unsubscribe.
    this.router.on('routeWillChange', (transition) => {
      if (!transition.to.find((route) => route.name === this.routeName)) {
        unsubscribe();
      }
    });
  }
}
