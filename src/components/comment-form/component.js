/**
 * Created by zhangzhichao on 16/7/8.
 */

import controller from './controller'

const CommentFormComponent = {
  bindings:{
    show:'<',
    onCancel:'&',
    onSubmit:'&'
  },
  controller,
  template:require('./template.html')
};

export default CommentFormComponent;