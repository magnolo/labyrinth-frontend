'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:collapseSidebarSm
 * @description
 * # collapseSidebarSm
 */
angular.module('minovateApp')
  .directive('collapseSidebar', function($rootScope, $cookies) {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {

        var app = angular.element('#minovate'),
          $window = angular.element(window),
          width = $window.width(),
          clicked = $cookies.menuswitched || '';

        var removeRipple = function() {
          angular.element('#sidebar').find('.ink').remove();
        };

        var collapse = function() {

          width = $window.width();
          if ($cookies.menuswitched === '') {
            if (width < 1024) {
              app.addClass('sidebar-sm');
            } else {
              app.removeClass('sidebar-sm sidebar-xs');
            }

            if (width < 768) {
              app.removeClass('sidebar-sm').addClass('sidebar-xs');
            } else if (width > 992) {
              app.removeClass('sidebar-sm sidebar-xs');
            } else {
              app.removeClass('sidebar-xs').addClass('sidebar-sm');
            }

            if (app.hasClass('sidebar-sm-forced')) {
              app.addClass('sidebar-sm');
            }

            if (app.hasClass('sidebar-xs-forced')) {
              app.addClass('sidebar-xs');
            }
          } else {

            if (width < 1024 && $cookies.menuswitched === '') {
              app.addClass('sidebar-sm');
            } else {
              app.removeClass('sidebar-sm sidebar-xs').addClass($cookies.menuswitched);
            }

            if (width < 768) {
              app.removeClass('sidebar-sm sidebar-xs').addClass('sidebar-xs');
            } else if (width > 992 && $cookies.menuswitched === '') {
              app.removeClass('sidebar-sm sidebar-xs');
            } else {
              app.removeClass('sidebar-xs').addClass('sidebar-sm').addClass($cookies.menuswitched);
            }

            if (app.hasClass('sidebar-sm-forced')) {
              app.addClass('sidebar-sm');
            }

            if (app.hasClass('sidebar-xs-forced')) {
              app.addClass('sidebar-xs');
            }
          }
        };

        collapse();

        $window.resize(function() {
          if (width !== $window.width()) {
            var t;
            clearTimeout(t);
            t = setTimeout(collapse, 300);
            removeRipple();
          }
        });

        element.on('click', function(e) {
          if (app.hasClass('sidebar-sm')) {
            app.removeClass('sidebar-sm').addClass('sidebar-xs');
            $cookies.menuswitched = 'sidebar-xs';
          } else if (app.hasClass('sidebar-xs')) {
            app.removeClass('sidebar-xs');
            $cookies.menuswitched = '';
          } else {
            app.addClass('sidebar-sm');
            $cookies.menuswitched = 'sidebar-sm';
          }

          app.removeClass('sidebar-sm-forced sidebar-xs-forced');
          app.parent().removeClass('sidebar-sm sidebar-xs');
          removeRipple();
          e.preventDefault();
        });

      }
    };
  });