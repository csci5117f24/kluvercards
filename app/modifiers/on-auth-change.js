import Modifier from 'ember-modifier';
import { service } from '@ember/service';


export default class OnAuthChangeModifier extends Modifier {
  @service auth;

  modify(element, [handler]) {
    console.log(handler)
    // access this simply so that it's understood as a dependency
    handler(this.auth.user)
  }
}
