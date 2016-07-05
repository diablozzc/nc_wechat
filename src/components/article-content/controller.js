/**
 * Created by zhangzhichao on 16/7/5.
 */

class ArticleContentController {
  constructor() {
  }
  $onInit() {

  }

  onClickBack(){
    history.back();
  }

}

ArticleContentController.$inject = ['$scope','$element'];

export default ArticleContentController;