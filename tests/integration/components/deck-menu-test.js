import { module, test } from 'qunit';
import { setupRenderingTest } from 'kluvercards/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | deck-menu', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DeckMenu />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <DeckMenu>
        template block text
      </DeckMenu>
    `);

    assert.dom().hasText('template block text');
  });
});
