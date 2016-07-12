/**
 * Created by zhangzhichao on 16/6/30.
 */
class ActionBarController {
  /*@ngInject*/
  constructor() {
  }
  $onInit() {
    
  }

  onClickBack(){
    history.back();
  }

}

export default ActionBarController;