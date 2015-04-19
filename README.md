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

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
