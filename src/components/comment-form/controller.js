/**
 * Created by zhangzhichao on 16/7/8.
 */

class CommentFormController {
  constructor($scope,$element) {
  }

  $onInit() {
    this.comment_content = '';
  }


  cancelComment(){
    this.onCancel();
  }
  sendComment(){
    console.log(this.comment_content);
  }

}

CommentFormController.$inject = ['$scope','$element'];

export default CommentFormController;