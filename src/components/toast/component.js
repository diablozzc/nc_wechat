/**
 * Created by zhangzhichao on 16/7/8.
 */

import controller from './controller';

const ToastComponent = {
  bindings:{
    show:'=',
    time:'@',
    type:'@',
    width:'@'
  },
  controller,
  controllerAs:'toast',
  transclude:true,
  
  template:require('./template.html')
};

export default ToastComponent;
