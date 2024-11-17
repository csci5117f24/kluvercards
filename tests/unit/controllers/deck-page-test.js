import { module, test } from 'qunit';
import { setupTest } from 'kluvercards/tests/helpers';

module('Unit | Controller | deck-page', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:deck-page');
    assert.ok(controller);
  });
});
