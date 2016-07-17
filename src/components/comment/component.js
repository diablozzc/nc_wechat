/**
 * Created by zhangzhichao on 16/7/6.
 */
import controller from './controller';

const CommentComponent = {
  bindings:{
    listData:'<',
    onLoadMore:'&'
  },
  controller,
  transclude:{
    'buttons':'buttons'
  },
  template:require('./template.html')
};

export default CommentComponent;