/**
 * Created by zhangzhichao on 16/6/30.
 */

import controller from './controller';
const ActionBarComponent = {
  bindings:{
    leftBtn:'<',
    title:'@',
    rightBtn:'<'
  },
  controller,
  template:require('./template.html')
};

export default ActionBarComponent;