/**
 * Created by zhangzhichao on 16/7/7.
 */

import controller from './controller';

const PopupComponent = {
  bindings:{
    show:'<',
    height:'@',
    onClosePopup:'&'
  },
  controller,
  transclude:true,
  template:require('./template.html')
};

export default PopupComponent;
