hackNewsClone.controller('PointsCtrl', function PointsCtrl($scope, ArticleFactory, CommentFactory){
  $scope.articles = ArticleFactory.articles;

  $scope.caculatePoints = function(id){
    percent = $scope.articles[id-1].time / Date.now()
    $scope.articles[id-1].points = $scope.articles[id-1].count;
  }
});
