var hackNewsClone = angular.module('hackNewsClone', ['ui.router']);

hackNewsClone.config(function($stateProvider){
  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('articles', {
    url:"/articles/:articlesId",
    templateUrl: "partials/articles.html",
    controller: "CommentsCtrl"
  });
});
