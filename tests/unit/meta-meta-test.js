import { test } from 'ember-qunit';
import { module } from 'qunit';
import startApp from '../helpers/start-app';
import { title, description, meta } from '../helpers/document-meta';
import Ember from 'ember';

var App, Router;

module('ember-meta-meta', {
  setup: function() {
    App = startApp();
    Router = App.__container__.lookup('router:main');
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Default values', function(assert) {
  assert.expect(3);

  visit('/');

  andThen(function() {
    assert.ok(title().match(new RegExp("^My Custom Default Title - My Website")));
    assert.equal(description(), 'This Is Default Dummy Description');
    assert.equal(meta('og:image'), 'https://exemple.net/my-logo.png');
  });
});


test('Visit all pages', function(assert) {
  assert.expect(12);

  visit('/news');

  andThen(function() {
    assert.ok(title().match(new RegExp("^This Is News Title - My Website")));
    assert.equal(description(), 'This Is News Description');
    assert.equal(meta('og:image'), 'https://exemple.net/latest-news.png');
  });

  visit('/about');

  andThen(function() {
    assert.ok(title().match(new RegExp("^This Is About Title - My Website")));
    assert.equal(description(), null);
    assert.equal(meta('og:image'), null);
  });

  visit('/empty');

  andThen(function() {
    assert.ok(title().match(new RegExp("^My Custom Default Title - My Website")));
    assert.equal(description(), null);
    assert.equal(meta('og:image'), null);
  });

  visit('/');

  andThen(function() {
    assert.ok(title().match(new RegExp("^My Custom Default Title - My Website")));
    assert.equal(description(), null);
    assert.equal(meta('og:image'), null);
  });
});
