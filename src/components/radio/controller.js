/**
 * Created by zhangzhichao on 16/7/8.
 */
class RadioController {
  /*@ngInject*/
  constructor($scope,$element) {
    this.uuid = Math.random().toString(36).substring(3, 8);
  }

  $onInit() {

  }

  $onChanges(changes){

  }


}


export default RadioController;