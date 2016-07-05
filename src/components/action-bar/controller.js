/**
 * Created by zhangzhichao on 16/6/30.
 */
class ActionBarController {
  constructor() {
  }
  $onInit() {
    
  }

  onClickBack(){
    history.back();
  }

}

ActionBarController.$inject = ['$scope','$element'];

export default ActionBarController;