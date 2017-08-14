/**
 * Created by zhangzhichao on 16/7/8.
 */
class ConfirmController {
  /*@ngInject*/
  constructor($scope, $element, $interval) {
    this.scope = $scope;
  }

  $onInit() {

  }
  cancel(){
    this.onCancel();
    this.show = false;
  }

  confirm(){
    this.onConfirm();
    this.show = false;
  }



}


export default ConfirmController;