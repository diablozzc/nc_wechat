/**
 * Created by zhangzhichao on 16/7/8.
 */

class CommentFormController {
  /*@ngInject*/
  constructor($scope,$element) {
  }

  $onInit() {
    this.comment_content = '';
  }


  cancelComment(){
    this.onCancel();
  }
  sendComment(){
    this.onSubmit({$event:{
      comment_content:this.comment_content
    }});
    this.onCancel();
  }

}


export default CommentFormController;