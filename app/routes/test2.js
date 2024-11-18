import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class Test2Route extends Route {
  @service auth;
  @service router;

  model() {
    throw new Error('OH NO');
  }

  @action
  error(err) {
    console.log(err);
    this.router.transitionTo('index');
  }
}
