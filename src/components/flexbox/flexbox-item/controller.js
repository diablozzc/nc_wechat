/**
 * Created by zhangzhichao on 16/7/8.
 */
import _ from 'lodash';
const prefixList = ['-moz-box-', '-webkit-box-', ''];

class FlexItemController {
  /*@ngInject*/
  constructor($scope, $element, $timeout) {
    this.scope = $scope;
    this.$el = $element[0]
    this.$el.className = 'vux-flexbox-item';
    this.element = $element;
    this.timeout = $timeout;

    if(angular.isDefined(this.flexbox)){
      this.$parent = this.flexbox;
    }else{
      this.$parent = this.scope.$parent.$parent.$ctrl;
    }

  }

  $onInit() {
    this.bodyWidth = document.documentElement.offsetWidth;

    // this.$parent = this.scope.$parent.$parent.$ctrl;

    this.element.css(this.style());

  }

  style() {
    let styles = {};
    let marginName = this.$parent.orient === 'horizontal' ? 'marginLeft' : 'marginTop';
    styles[marginName] = `${this.$parent.gutter}px`;

    if (this.span) {
      for (let i = 0; i < prefixList.length; i++) {
        styles[prefixList[i] + 'flex'] = `0 0 ${this.buildWidth(this.span) * 100}%`;
      }
    }
    if (typeof this.order !== 'undefined') {
      styles.order = this.order;
    }
    return styles;
  }


  buildWidth (width) {

    if(_.isNaN(width-0)){
      return width.replace('px', '') / this.bodyWidth
    }else{
      if (width < 1) {
        return width
      } else {
        return width / 12
      }
    }
  }
  


}


export default FlexItemController;