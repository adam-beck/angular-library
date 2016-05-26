import angular from 'angular';
import template from './template.html';

function bar() {
  return {
    restrict: 'E',
    scope: {},
    template
  };
}

export default angular.module('my.components.bar', [])
  .directive('myBar', bar)
  .name;
