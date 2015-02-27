hackNewsClone.controller('CountCtrl', function CountCtrl($scope) {
    $scope.addOneVote = function(id, article) {
      $scope.articles[id-1].count += 1;
      for(i=0; i < article.length; i++){
        var timepassed = (Date.now() - $scope.articles[i].time)*.00001;
        $scope.articles[i].points = ($scope.articles[i].count - (timepassed)) + 8 + $scope.articles[i].comments.length;
      }
    };
});
