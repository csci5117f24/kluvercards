import Component from '@glimmer/component';

import { service } from '@ember/service';
import { action } from '@ember/object';

export default class LoginButton extends Component {
  @service auth;
}
