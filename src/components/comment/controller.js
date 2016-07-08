/**
 * Created by zhangzhichao on 16/7/6.
 */
class CommentController {
  constructor($scope,$element) {
  }

  $onInit() {
  }
  
  loadMoreComment(){
    this.onLoadMore();
  }

}

CommentController.$inject = ['$scope','$element'];

export default CommentController;