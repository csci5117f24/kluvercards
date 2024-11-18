import { module, test } from 'qunit';
import { setupTest } from 'kluvercards/tests/helpers';

module('Unit | Route | test-loading', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:test-loading');
    assert.ok(route);
  });
});
