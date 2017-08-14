/**
 * Created by zhangzhichao on 16/7/8.
 */
class FlexController {
  /*@ngInject*/
  constructor($scope, $element, $interval) {
    this.scope = $scope;
    this.gutter = angular.isUndefined(this.gutter) ? 8 : this.gutter;
    this.orient = angular.isUndefined(this.orient) ? 'horizontal' : this.orient;

    if(angular.isDefined(this.ref)){
      this.ref = this;
    }

  }

  $onInit() {

  }

  styles(){
    return {
      'justify-content': this.justify,
      'align-items': this.align,
      'flex-wrap': this.wrap,
      'flex-direction': this.direction
    }
  }
  classes() {
    let tmp = {'vux-flex-col': this.orient === 'vertical', 'vux-flex-row': this.orient === 'horizontal'}
    if(this.boxClass){
      tmp[this.boxClass] = true
    }
    return tmp
  }



}


export default FlexController;