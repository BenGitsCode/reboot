import { test } from 'qunit';
import moduleForAcceptance from 'bengitscode-portfolio/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | portfolio');

test('should show projects as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/projects', 'should redirect automatically')
  });
});

test('should link to About me.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should nagivate to about')
  })
});

test('should link to contact information.', function (assert) {
});

test('should list all projects.', function (assert) {
});

test('should show details for a selected project', function (assert) {
});
