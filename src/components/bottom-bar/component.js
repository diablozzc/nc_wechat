/**
 * Created by zhangzhichao on 16/7/6.
 */

import controller from './controller';

const BottomBarComponent = {
  bindings:{
    onClick:'&'
  },
  controller,
  transclude:{
    'leftBtn':'?leftBtn',
    'middleBtn':'?middleBtn',
    'rightBtn':'?rightBtn'
  },
  template:require('./template.html')
};

export default BottomBarComponent;