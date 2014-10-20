'use strict';

angular.module('myApp', ['ngCookies']);

angular.module('myApp').controller('IndexController', function($cookies) {
  this.sessionCookie = $cookies['connect.sid'];
});