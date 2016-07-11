/**
 * Created by zhangzhichao on 16/6/30.
 */

import controller from './controller';
const ActionBarComponent = {
  bindings:{
    title:'@',
  },
  transclude:{
    'leftBtn':'?leftBtn',
    'rightBtn':'?rightBtn'
  },
  controller,
  template:require('./template.html')
};

export default ActionBarComponent;