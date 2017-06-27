import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember'

// Sample fake project object, with all of the same properties as my project model.
let project = Ember.Object.create({
  id: 'test-id',
  title: 'test-title',
  type: 'test-type',
  image: 'test-image.png',
  description: 'test-description'

})

moduleForComponent('project-listing', 'Integration | Component | project listing', {
  integration: true
});


test('should display project details', function (assert) {
  this.set('projectObj', project)
});

test('should toggle wide class on click', function (asser) {
  this.set('projectObj', project)
})
