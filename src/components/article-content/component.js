/**
 * Created by zhangzhichao on 16/7/5.
 */
import controller from './controller';
const ArticleContentComponent = {
  bindings:{
    theArticle:'<'
  },
  controller,
  template:require('./template.html')
};

export default ArticleContentComponent;