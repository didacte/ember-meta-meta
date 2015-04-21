# ember-meta-meta

> Addon to set title & meta tags in your EmberJS application

[![Circle CI](https://circleci.com/gh/didacte/ember-meta-meta/tree/master.svg?style=svg)](https://circleci.com/gh/didacte/ember-meta-meta/tree/master)
[![Dependency Status](https://david-dm.org/didacte/ember-meta-meta.svg)](https://david-dm.org/didacte/ember-meta-meta)
[![Code Climate](https://codeclimate.com/github/didacte/ember-meta-meta/badges/gpa.svg)](https://codeclimate.com/github/didacte/ember-meta-meta)
[![Inline docs](http://inch-ci.org/github/didacte/ember-meta-meta.svg?branch=master)](http://inch-ci.org/github/didacte/ember-meta-meta)

## Usage

    ember install:addon ember-meta-meta

Then set desired metas in your controller setup :

```js
export default Ember.Route.extend({
  setupController: function (controller, model) {
    this.setMetas({
      title: 'This Is News Title',
      description: 'This Is News Description',
      'og:image': 'https://exemple.net/latest-news.png'
    });
  }
});
```

## Contributing

Use GitHub issues for questions, issues and feature requests.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details on contributing and running test.

## Credits

Jean-Philippe Doyle
