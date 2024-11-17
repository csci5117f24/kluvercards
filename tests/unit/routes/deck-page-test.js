import { module, test } from 'qunit';
import { setupTest } from 'kluvercards/tests/helpers';

module('Unit | Route | deck_page', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:deck-page');
    assert.ok(route);
  });
});
