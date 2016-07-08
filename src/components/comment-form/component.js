/**
 * Created by zhangzhichao on 16/7/8.
 */

import controller from './controller'

const CommentFormComponent = {
  bindings:{
    onCancel:'&'
  },
  controller,
  template:require('./template.html')
};

export default CommentFormComponent;