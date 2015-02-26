hackNewsClone.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, ArticleFactory, CommentFactory) {
  $scope.article = CommentFactory.findById(ArticleFactory.articles, $stateParams.articlesId);

  $scope.addComment = function(){
    $scope.article.comments.push( {remark: $scope.commentRemark});
    $scope.commentRemark = null;
  }
});
