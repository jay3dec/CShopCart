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
}])

.directive('checkList',function(){
	return {
		restrict:'E',
		scope: {
            name: '=',
            option: '='
        },
		template: function(elem,attrs){
			return '<div class="panel-heading">\
                    <h3 nclass="panel-title">Panel title</h3>\
                </div>\
                <div class="panel-body">\
                	 <div class="radio">\
                        <label><input type="radio" name="optradio">Option 1</label>\
                    </div>\
                     <div class="radio">\
                        <label><input type="radio" name="optradio">Option 1</label>\
                    </div>\
                    <div class="radio">\
                        <label><input type="radio" name="optradio">Option 1</label>\
                    </div>\
                </div>'
		},
		link:function(scope,elem,attrs){
			  
		}
	};
})