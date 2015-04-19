# ember-cli-meta-meta

> Addon to set title & meta tags in your EmberJS application

[![Circle CI](https://circleci.com/gh/didacte/ember-cli-meta-meta/tree/master.svg?style=svg)](https://circleci.com/gh/didacte/ember-cli-meta-meta/tree/master)

## Usage

    ember install:addon ember-cli-meta-meta

Then set desired metas in your controller setup :

    export default Ember.Route.extend({
      setupController: function (controller, model) {
        this.setMetas({
          title: 'This Is News Title',
          description: 'This Is News Description',
          'og:image': 'https://exemple.net/latest-news.png'
        });
      }
    });

## Contributing

Use GitHub issues for questions, issues and feature requests.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details on contributing and running test.

## Credits

Jean-Philippe Doyle
