import { module, test } from 'qunit';
import { setupRenderingTest } from 'kluvercards/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | new-deck-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NewDeckButton />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <NewDeckButton>
        template block text
      </NewDeckButton>
    `);

    assert.dom().hasText('template block text');
  });
});
