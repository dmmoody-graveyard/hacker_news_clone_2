hackNewsClone.controller('CountCtrl', function CountCtrl($scope) {
    $scope.addOneVote = function(id) {
      $scope.articles[id-1].count += 1;
    }
});
