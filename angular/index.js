import angular from 'angular';
import bar from './src/bar';

angular.module('my.components2', [bar])
  .directive('myFoo', () => {
    return {
      restrict: 'E',
      scope: {},
      template: `This is the Foo Component`
    };
  });
