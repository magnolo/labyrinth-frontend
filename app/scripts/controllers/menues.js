'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:MailCtrl
 * @description
 * # MailCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('MenuesCtrl', function($scope) {
    $scope.page = {
      title: 'Menüs',
      subtitle: 'Darstellung der Menüstruktur'
    };
    
  })
  .controller('MenuetreeCtrl', function($scope, $timeout) {
    $scope.pages = [{
      name: 'Home',
      id: 1
    }];
    $scope.types = [{
      id: 1,
      name: 'Seite'
    }, {
      id: 2,
      name: 'Artikel Kategorie'
    }, {
      id: 3,
      name: 'Artikel'
    }, {
      id: 4,
      name: 'Link'
    }];
    var tree;
    $scope.my_tree_handler = function(branch) {
      //var _ref;
      //$scope.output = "You selected: " + branch.label;
      $scope.item = branch;
      //if ((_ref = branch.data) !== null ? _ref.description : void 0) {
      //  return $scope.output += '(' + branch.data.description + ')';
      //  }
    };
    $scope.try_adding_a_branch = function() {
      var b;
      b = tree.get_selected_branch();
      return tree.add_branch(b, {
        label: 'Neuer Menüeintrag',
        data: {

        }
      });
    };
    $scope.setItem = function(item) {
      $scope.activeItem = item;
      $scope.item = item;
    };
    $scope.newSubItem = function(scope) {
      var nodeData = scope.$modelValue;
      if (!nodeData.children) {
        nodeData.children = [];
      }
      var newItem = {
        label: "Neuer Menüpunkt",
        children: []
      };
      nodeData.children.push(newItem);
      $scope.item = newItem;
      $scope.activeItem = $scope.item;
    };
    $scope.toggle = function(scope) {
      scope.toggle();
    };
    $scope.my_tree = tree = {};
    var treedata_avm = [{
      id: 1,
      label: 'Urlaubserlebnisse',
      children: [{
        label: 'Alpen Adria Erlebnishighlights',
        url: 'erlebnishightlight',
        page: 1,
        seo: 'alpen-adria-erelbnishighlights',
        online: 1,
        type: 1
      }, {
        id: 2,
        label: 'Regionale Erlebnisse'
      }, {
        id: 3,
        label: 'Der Campingplatz mit seinen Erlebnissen'
      }, {
        id: 4,
        label: 'Specials und Packages'
      }, {
        id: 5,
        label: 'Veranstaltungen'
      }, {
        id: 6,
        label: 'Ausflugsziele'
      }]
    }, {
      id: 7,
      label: 'Schwimmbadcamping',
      children: [{
        id: 8,
        label: 'Der Campingplatz'
      }, {
        id: 9,
        label: 'Preise'
      }, {
        id: 10,
        label: 'Mobilheime'
      }, {
        id: 11,
        label: 'Hund und Katz'
      }]
    }, {
      id: 12,
      label: 'Seecamping',
      children: [{
        id: 13,
        label: 'Der Campingplatz'
      }, {
        id: 14,
        label: 'Preise'
      }, {
        id: 15,
        label: 'Mobilheime'
      }, {
        id: 16,
        label: 'Hund und Katz'
      }]
    }, {
      id: 17,
      label: 'Landhaus Michelpauli',
      children: [{
        id: 18,
        label: 'Informationen'
      }, {
        id: 19,
        label: 'Zimmer und Preise'
      }, {
        id: 20,
        label: 'Special und Packages'
      }],
    }, {
      id: 21,
      label: 'Kontakt & Service',
      children: [{
        id: 22,
        label: 'Anfahrt'
      }, {
        id: 23,
        label: 'Downloads'
      }, {
        id: 24,
        label: 'Stornoversicherung'
      }, {
        id: 25,
        label: 'Datenschutz'
      }, {
        id: 26,
        label: 'Camping Blog'
      }, {
        id: 27,
        label: 'Partner'
      }],
    }];

    $scope.my_data = treedata_avm;
  });
