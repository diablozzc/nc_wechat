/**
 * Created by zhangzhichao on 16/7/6.
 */
import controller from './controller';

const SignupListComponent = {
  bindings:{
    listData:'<',
    signUpNumber:'<',
    onLoadMore:'&'
  },
  controller,
  template:require('./template.html')
};

export default SignupListComponent;