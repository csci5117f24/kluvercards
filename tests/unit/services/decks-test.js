import { module, test } from 'qunit';
import { setupTest } from 'kluvercards/tests/helpers';

module('Unit | Service | decks', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:decks');
    assert.ok(service);
  });
});