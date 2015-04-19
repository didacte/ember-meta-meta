/* global QUnit */

// Disable alerts in title since we test the title okthx
QUnit.config.altertitle = false;

import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';

setResolver(resolver);
