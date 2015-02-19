'use strict';

angular.module('cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'public/cart/cart.html',
    controller: 'CartCtrl'
  });
}])

.controller('CartCtrl', ['$scope',function($scope) {
	$scope.questions = [
		{'question':'Hard Disk','id':'HD','prices':[{'size':'200GB','price':'2000'},{'size':'400GB','price':'4000'}]},
		{'question':'CPU','id':'CPU','prices':[{'size':'i3','price':'20000'},{'size':'i5','price':'25000'}]},
		{'question':'Monitor','id':'MON','prices':[{'size':'16\'','price':'3000'},{'size':'19\'','price':'5000'}]},
		{'question':'Optical Mouse','id':'MOU','prices':[{'size':'Optical','price':'350'},{'size':'Advanced','price':'550'}]},
		{'question':'RAM','id':'RM','prices':[{'size':'4GB','price':'4000'},{'size':'8GB','price':'8000'}]},
		{'question':'USB Keyboard','id':'KEY','prices':[{'size':'Standard','price':'2500'},{'size':'Advanced','price':'4500'}]}
	];

    $scope.scroll = 0;

    $scope.total = 0;

    $scope.sum = function(item){
                console.log(item);
                $scope.total += parseInt(item);
                
            }
    
}])

.directive('checkList',function(){
	return {
		restrict:'E',
		scope: {
            name: '=',
            option: '=',
            sum: '&'
        },
		template: function(elem,attrs){
			return '<div class="panel-body">\
                    <div class="radio" ng-repeat="i in option">\
                        <label><input type="radio" ng-model="value" ng-change="sum({item:value})" value="{{i.price}}" name="{{name}}">{{i.size}} Rs.{{i.price}}</label>\
                    </div>\
                </div>'
		},
		link:function(scope,elem,attrs,controller){
			
		}
	};
})

.directive('scrollPosition', function($window) {
  return {
    scope: {
      scroll: '=scrollPosition'
    },
    link: function(scope, element, attrs) {
      var windowEl = angular.element($window);
      var handler = function() {
        scope.scroll = windowEl.scrollTop();

      }
      windowEl.on('scroll', scope.$apply.bind(scope, handler));
      handler();
    }
  };
});