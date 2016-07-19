/**
 * Created by zhangzhichao on 16/7/8.
 */

import controller from './controller';

const UploaderWechatComponent = {
  bindings:{
    result:'='
  },
  controller,
  controllerAs:'uploader',
  
  template:require('./template.html')
};

export default UploaderWechatComponent;
