import EmberRouter from '@ember/routing/router';
import config from 'kluvercards/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('testing');

  this.route('deck_page', {
    path: 'deck/:deck_id',
    auth_required: true,
  });

  this.route('not_found', {
    path: '/*path',
  });
  this.route('test2');
});
