/**
 * Created by zhangzhichao on 16/7/8.
 */
class ToastController {
  /*@ngInject*/
  constructor($scope, $element, $timeout) {
    this.scope = $scope;
    this.width = this.width ? this.width : '7.6em';
    this.type = this.type ? this.type : 'success';
    this.time = this.time ? this.time : 2000;



    // this.input = $element[0].querySelector('#search_input');
    $scope.$watch('toast.show', (val)=> {
      if (val) {
        $timeout.cancel(this.timeout);
        this.timeout = $timeout(()=>{
          this.show = false
        },this.time);
      }

    })
  }

  $onInit() {

  }

  toastClass() {
    return {
      'weui_toast_forbidden': this.type === 'warn',
      'weui_toast_cancel': this.type === 'cancel',
      'weui_toast_success': this.type === 'success',
      'weui_toast_text': this.type === 'text'
    }
  }


}


export default ToastController;