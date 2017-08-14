/**
 * Created by zhangzhichao on 16/7/6.
 */
import controller from './controller';

const TeamItemComponent = {
  bindings:{
    itemData:'<',
  },
  controller,
  template:require('./template.html')
};

export default TeamItemComponent;