var bookworm = angular.module('bookworm', []);

bookworm.controller('bookController', function ($scope, $http) {
  $http.get('js/books.json')
        .then(function(response){
          $scope.books = response.data;
        });
  $scope.orderProp = 'number';
});
