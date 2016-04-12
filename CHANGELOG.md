# 0.2

- Improve addon structure as scaffolded by ember-cli 2.4
- Fix compatibility with ember 2.x
  - Change `Ember.keys` to `Object.keys`
  - Remove usage of `Ember.EnumerableUtils`
  - `instance-intializers` vs `initializers`

# 0.1.2

Fix support for Open Graph using `property` vs `name` (#2).

# 0.1.1

Bugfix : meta name was not set if not already in DOM

# 0.1.0

Breaking change: now using service injection, see updated README (#1).

Added `defaultTitle` option.
Added `title(value)` function to be overridden with prefix/suffix/etc.

# 0.0.1

Initial release
