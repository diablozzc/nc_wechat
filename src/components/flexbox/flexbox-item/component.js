/**
 * Created by zhangzhichao on 16/7/8.
 */

import controller from './controller';

const FlexboxItemComponent = {
  bindings:{
    span: '@',
    order: '@',
    flexbox:'='
  },
  require: '^^flexbox',
  controller,
  transclude:true,
  template:require('./template.html')
};

export default FlexboxItemComponent;
