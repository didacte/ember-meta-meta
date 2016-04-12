import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { title, description, metaName, metaProperty } from '../helpers/document-meta';

moduleForAcceptance('Acceptance | meta');

test('Default values', function(assert) {
  assert.expect(3);

  visit('/');

  andThen(function() {
    assert.ok(title().match(new RegExp("^My Custom Default Title - My Website")));
    assert.equal(description(), 'This Is Default Dummy Description');
    assert.equal(metaProperty('og:image'), 'https://exemple.net/my-logo.png');
  });
});


test('Visit all pages', function(assert) {
  assert.expect(16);

  visit('/news');

  andThen(function() {
    assert.ok(title().match(new RegExp("^This Is News Title - My Website")));
    assert.equal(description(), 'This Is News Description');
    assert.equal(metaProperty('og:image'), 'https://exemple.net/latest-news.png');
    // Meta not existing in initial DOM
    assert.equal(metaName('twitter:author'), '@j15e');
    assert.equal(metaProperty('og:description'), 'News Description for Open Graph');
  });

  visit('/about');

  andThen(function() {
    assert.ok(title().match(new RegExp("^This Is About Title - My Website")));
    assert.equal(description(), null);
    assert.equal(metaProperty('og:image'), null);
    // Meta not existing in initial DOM
    assert.equal(metaName('twitter:author'), null);
    assert.equal(metaProperty('og:description'), null);
  });

  visit('/empty');

  andThen(function() {
    assert.ok(title().match(new RegExp("^My Custom Default Title - My Website")));
    assert.equal(description(), null);
    assert.equal(metaProperty('og:image'), null);
  });

  visit('/');

  andThen(function() {
    assert.ok(title().match(new RegExp("^My Custom Default Title - My Website")));
    assert.equal(description(), null);
    assert.equal(metaProperty('og:image'), null);
  });
});

