/**
 * Created by zhangzhichao on 16/7/8.
 */
import controller from './controller';


const NewsSearchComponent = {
  bindings: {
    newsData: '<'
  },
  controller,
  controllerAs:'newsSearch',
  template:require('./template.html')
};

export default NewsSearchComponent;