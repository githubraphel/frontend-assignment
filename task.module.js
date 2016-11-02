/**
 * Created by thomas on 10/5/16.
 */


(function(){

   'use strict';

    angular
        .module('task',['ngMessages', 'ngRoute'])
        .config(moduleConfig)
        .run(moduleRun);



    moduleConfig.$inject=['$routeProvider'];
    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/user-list', {
                templateUrl: 'user-list.tmpl.html',
                controller: 'UserListController',
                controllerAs: 'vm'
            })
            .when('/add-user', {
                templateUrl: 'add-user.tmpl.html',
                controller: 'AddUserController',
                controllerAs: 'addUserVm'
            })
            .otherwise({
                redirectTo: '/user-list'
            });
    }


    moduleRun.$inject = [];
    function moduleRun() {
        console.log('App Started');
    }






})();
