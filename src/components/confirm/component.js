/**
 * Created by zhangzhichao on 16/7/8.
 */

import controller from './controller';

const ConfirmComponent = {
  bindings:{
    show:'=',
    title:'@',
    confirmText:'@',
    cancelText:'@',
    onConfirm:'&',
    onCancel:'&'
  },
  controller,
  controllerAs:'confirm',
  transclude:true,
  template:require('./template.html')
};

export default ConfirmComponent;
