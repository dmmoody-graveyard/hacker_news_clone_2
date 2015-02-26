hackNewsClone.controller('ArticlesCtrl', function ArticlesCtrl($scope, ArticleFactory){
  $scope.articles = ArticleFactory.articles;
  $scope.ArticleFactory = ArticleFactory;
});
