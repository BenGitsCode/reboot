import { test } from 'qunit';
import moduleForAcceptance from 'bengitscode-portfolio/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | portfolio');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
