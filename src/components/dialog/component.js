/**
 * Created by zhangzhichao on 16/7/8.
 */

import controller from './controller';

const DialogComponent = {
  bindings:{
    show:'=',
    onCallback:'&',
    transparent:'@'
  },
  controller,
  controllerAs:'dialog',
  transclude:true,
  template:require('./template.html')
};

export default DialogComponent;
