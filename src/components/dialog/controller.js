/**
 * Created by zhangzhichao on 16/7/8.
 */
class DialogController {
  /*@ngInject*/
  constructor($scope, $element, $interval) {
    this.scope = $scope;
  }

  $onInit() {
    this.transparent = !angular.isUndefined(this.transparent)

  }
  close(){
    this.show = false;
    this.onCallback();
  }

}


export default DialogController;