var app = angular.module('eisApp', ['ngRoute']);

host = 'http://localhost:5000/'

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/Document', {
      templateUrl: 'views/docs.html',
      controller: 'DocsCtrl'
    })
    .when('/Image', {
      templateUrl: 'views/images.html',
      controller: 'ImgCtrl'
    })
    .when('/Video', {
      templateUrl: 'views/videos.html',
      controller: 'VidCtrl'
    })
    .when('/Music', {
      templateUrl: 'views/music.html',
      controller: 'MusicCtrl'
    })
    .when('/latest', {
      templateUrl: 'views/latest.html',
      controller: 'LatestCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
});

app.controller('MainCtrl', function($scope, $http) {
  $scope.loading = true;
  $http.get(host + 'categories/').then(function(response) {
    $scope.categories = response.data.categories;
    $scope.loading = false;
  })
})

app.controller('DocsCtrl', function($scope, $http) {
  $scope.loading = true;
  $http.get(host + 'categories/documents').then(function(response) {
    console.log("HELLO");
    console.log(response);
    $scope.documents = response.data.files;
    $scope.loading = false;
  })
})

app.controller('ImgCtrl', function($scope, $http) {
  $scope.loading = true;
  $scope.showOne = false;

  $http.get(host + 'categories/images').then(function(response) {
    $scope.images = response.data.files;
    $scope.loading = false;
  })

  $scope.showSingle = function(image) {
    $scope.showOne = true;
    $scope.showImage = image;
  }

  $scope.showBack = function() {
    $scope.showOne = false;
    $scope.showImage = null;
  }
})

app.controller('VidCtrl', function($scope, $http) {
  $scope.loading = true;

  $http.get(host + 'categories/videos').then(function(response){
    $scope.videos = response.data.files;
    $scope.loading = false;
  })
})

app.controller('MusicCtrl', function($scope, $http) {
  $scope.loading = true;

  $http.get(host + 'categories/music').then(function(response){
    $scope.music = response.data.files;
    $scope.loading = false;
  })
})

app.controller('LatestCtrl', function($scope, $http) {
  $scope.loading = true;
  $http.get(host+'latest/').then(function(response) {
    $scope.files = response.data.files;
    $scope.loading = false;
  })
})
