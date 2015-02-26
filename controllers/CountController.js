hackNewsClone.controller('CountCtrl', function CountCtrl($scope) {
    $scope.addOneVote = function(id, article) {
      $scope.articles[id-1].count += 1;
      for(i=0; i < article.length; i++){
        $scope.articles[i].points = $scope.articles[i].count * (($scope.articles[i].time / Date.now()));
      }
    };

        // $scope.articles[id-1].points = $scope.articles[id-1].count * (($scope.articles[id-1].time / Date.now()));
});
