import { test } from 'ember-qunit';
import { module } from 'qunit';
import startApp from '../helpers/start-app';
import { title, description, meta } from '../helpers/document-meta';
import Ember from 'ember';

var App, Router;

module('ember-cli-meta-meta', {
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
    assert.equal(title(), 'This Is Default Dummy Title');
    assert.equal(description(), 'This Is Default Dummy Description');
    assert.equal(meta('og:image'), 'https://exemple.net/my-logo.png');
  });
});


test('News page value', function(assert) {
  assert.expect(3);

  visit('/news');

  andThen(function() {
    assert.equal(title(), 'This Is News Title');
    assert.equal(description(), 'This Is News Description');
    assert.equal(meta('og:image'), 'https://exemple.net/latest-news.png');
  });
});
