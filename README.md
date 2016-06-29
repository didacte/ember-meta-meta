#<img src="https://cdn.rawgit.com/didacte/ember-meta-meta/master/logo.svg" width="250" title="ember-meta-meta by @L-A" title="ember-meta-meta">

> Addon to set title & meta tags in your EmberJS application

[![Circle CI](https://circleci.com/gh/didacte/ember-meta-meta/tree/master.svg?style=svg)](https://circleci.com/gh/didacte/ember-meta-meta/tree/master)
[![Dependency Status](https://david-dm.org/didacte/ember-meta-meta.svg)](https://david-dm.org/didacte/ember-meta-meta)
[![Code Climate](https://codeclimate.com/github/didacte/ember-meta-meta/badges/gpa.svg)](https://codeclimate.com/github/didacte/ember-meta-meta)
[![Inline docs](http://inch-ci.org/github/didacte/ember-meta-meta.svg?branch=master)](http://inch-ci.org/github/didacte/ember-meta-meta)

## Usage

    ember install ember-meta-meta

Set desired metas in your controller setup :

```js
export default Ember.Route.extend({
  afterModel() {
    this.get('meta').update({
      title: 'This Is News Title',
      description: 'This Is News Description',
      'og:image': 'https://exemple.net/latest-news.png',
      'twitter:author': '@j15e'
    });
  }
});
```

Will result into this HTML (open graph metas are using property automatically) :

```html
<title>This Is News Title</title>
<meta name="description" content="This Is News Description">
<meta property="og:image" content="https://exemple.net/latest-news.png">
<meta name="twitter:author" content="@j15e">
```

Title & metas are set only on `didTransition` in case the route would be canceled.

**Note**: Open Graph tags, for sharing on Facebook or Twitter, will not correctly work without using [FastBoot](https://www.ember-fastboot.com/) or some sort of server side rendering. All Google tags and data will work fine though because Google executes the JS.

## Advanced options

You can use an instance initializer to add the following:

- `defaultTitle` : Default title set when none is provided by route.
- `@title(value)` : Override the title function to append, prefix, etc.

Just run:

`ember g instance-initializer after-meta`

Then in the resulting initializer, do the following:

```js
export function initialize(appInstance) {
  const meta = appInstance.lookup('service:meta');
  meta.set('defaultTitle', 'My Custom Default Title');
  meta.reopen({
    title: function(value){
      return value + ' - My Website';
    }
  });
}

export default {
  after: 'meta',
  name: 'after-meta',
  initialize
};
```

## Contributing

Use GitHub issues for questions, issues and feature requests.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details on contributing and running test.

## Credits

Jean-Philippe Doyle
Jimmy Bourassa
