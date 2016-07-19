/**
 * Created by zhangzhichao on 16/7/7.
 */

class XTextareaController {
  /*@ngInject*/
  constructor($scope,$element,$timeout) {
    this.timeout = $timeout;
    this.input = $element[0].querySelector('textarea');


  }
  $onInit() {

    this.isRequired = this.required === 'true';
    
  }

  $onChanges(changes) {
    if(changes.show.currentValue){

      this.timeout(()=>{
        this.input.focus();
      });
      
    }
  }
  
  
}

export default XTextareaController;