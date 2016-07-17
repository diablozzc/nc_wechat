/**
 * Created by zhangzhichao on 16/7/7.
 */

class XTextareaController {
  /*@ngInject*/
  constructor($scope,$element) {

  }
  $onInit() {

    this.isRequired = this.required === 'true';
    
  }

  $onChanges(change) {
  }
  
  
}

// XTextareaController.$inject = ['$scope','$element'];

export default XTextareaController;