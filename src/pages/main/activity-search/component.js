/**
 * Created by zhangzhichao on 16/7/8.
 */
import controller from './controller';


const ActivitySearchComponent = {
  bindings: {
    listData: '<'
  },
  controller,
  controllerAs:'activitySearch',
  template:require('./template.html')
};

export default ActivitySearchComponent;