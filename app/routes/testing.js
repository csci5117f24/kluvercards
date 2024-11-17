import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { getDoc } from 'firebase/firestore';

export default class TestingRoute extends Route {
  @service auth;
  @service decks;

  async model() {}
}
