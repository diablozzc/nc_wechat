/**
 * Created by zhangzhichao on 16/7/6.
 */

class BottomBarController {
  constructor($scope,$element,$anchorScroll,$location) {
    this.$anchorScroll = $anchorScroll;
  }
  
  $onInit() {
    
  }
  
  takeComment() {
    this.onClick();
  }
  goComment() {
    this.$anchorScroll('article_comment');
  }
  goBack(){
    history.back();
  }
  
}

BottomBarController.$inject = ['$scope','$element','$anchorScroll','$location'];

export default BottomBarController;