/**
 * Created by zhangzhichao on 16/7/12.
 */
import _ from 'lodash';
import Moment from 'moment';
import 'moment/locale/zh-cn';

class NewsService {
  /*ngInject*/
  constructor(Models,$sce) {
    this.Models = Models;
    this.sce = $sce;
  }
  getList(param={}) {
    let p = Object.assign({},param);
    // p.columnKey = 'column_news';
    
    return this.Models.init('Article').actions('list',{},p).then((response)=>{
      Moment.locale('zh_cn');
      _.forEach(response,(item)=>{
        item.publishTime = Moment(item.publishTime).fromNow();
      });
      
      return response;
    });
  }
  getArticle(id){
    return this.Models.init('Article/id').actions('get',{},{id:id}).then((response)=>{
      response.publishTime = Moment(response.publishTime).format('YYYY-MM-DD');
      response.videoUrl = this.sce.trustAsResourceUrl(response.videoUrl);
      return response;
    });
  }
}


export default NewsService;