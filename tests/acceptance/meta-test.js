import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {
  title,
  description,
  metaName,
  metaProperty
} from '../helpers/document-meta';

module('Acceptance | meta', function(hooks) {
  setupApplicationTest(hooks);

  test('Default values', async assert => {
    assert.expect(3);

    await visit('/');

    assert.ok(title().match(new RegExp("^My Custom Default Title - My Website")));
    assert.equal(description(), 'This Is Default Dummy Description');
    assert.equal(metaProperty('og:image'), 'https://exemple.net/my-logo.png');
  });


  test('Visit all pages', async assert => {
    assert.expect(16);

    await visit('/news');

    assert.ok(title().match(new RegExp("^This Is News Title - My Website")));
    assert.equal(description(), 'This Is News Description');
    assert.equal(metaProperty('og:image'), 'https://exemple.net/latest-news.png');
    // Meta not existing in initial DOM
    assert.equal(metaName('twitter:author'), '@j15e');
    assert.equal(metaProperty('og:description'), 'News Description for Open Graph');

    await visit('/about');

    assert.ok(title().match(new RegExp("^This Is About Title - My Website")));
    assert.equal(description(), null);
    assert.equal(metaProperty('og:image'), null);
    // Meta not existing in initial DOM
    assert.equal(metaName('twitter:author'), null);
    assert.equal(metaProperty('og:description'), null);

    await visit('/empty');

    assert.ok(title().match(new RegExp("^My Custom Default Title - My Website")));
    assert.equal(description(), null);
    assert.equal(metaProperty('og:image'), null);

    await visit('/');

    assert.ok(title().match(new RegExp("^My Custom Default Title - My Website")));
    assert.equal(description(), null);
    assert.equal(metaProperty('og:image'), null);
  });
});

