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
  $onChanges(changes) {
    console.log(changes);
  }


  cancelComment(){
    this.onCancel();
  }
  sendComment(){
    this.onSubmit({$event:{
      comment_content:this.comment_content
    }});
    this.reset();
    this.onCancel();
  }

  reset(){
    this.comment_content = '';
  }

}


export default CommentFormController;