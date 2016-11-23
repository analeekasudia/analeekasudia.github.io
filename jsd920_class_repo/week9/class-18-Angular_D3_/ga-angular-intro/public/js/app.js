'use strict';

(function () {
    //enable tooltips
    $('[data-toggle="tooltip"]').tooltip()

    function todoController ($scope) { // 'scope' allows you to do thinks quickly, but if you have a few apps it may affect performance (i.e. best not to do in production)...
    	$scope.name = 'Angel'; // ...also 'scope' is a container for all the data
    	$scope.new_todo = '';

    	$scope.addTodo = function() { // a method of a 'scope' object (?)
    		// do stuff
    		var todo = ({
    			title: $scope.new_todo,
    			completed: false
    		})
    		$scope.todoList.push(todo);
    		$scope.new_todo = '';
    	}

    	// $scope.statusToggle

    	$scope.todoList = [
    		{
    			title: 'Do laundry',
    			completed: false
    		},
    		{
    			title: 'Check emails',
    			completed: true
    		},
    		{
    			title: 'Take class out for beer',
    			completed: false
    		}
    	];
    }

    var app = angular.module('app', []);
    app.controller('todoController', todoController)

})();