/**
 * Created by zhangzhichao on 16/7/8.
 */

import controller from './controller';

const FlexboxComponent = {
  bindings:{
    gutter: '@',
    orient: '@',
    justify:'@',
    align: '@',
    wrap: '@',
    direction: '@',
    ref:'=',
    boxClass:'@'
  },
  controller,
  transclude:true,
  template:require('./template.html')
};

export default FlexboxComponent;
