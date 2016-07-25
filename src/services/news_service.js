/**
 * Created by zhangzhichao on 16/7/12.
 */
import Moment from 'moment';
import 'moment/locale/zh-cn';

class NewsService {
  /*@ngInject*/
  constructor(Models,$sce) {
    this.Models = Models;
    this.sce = $sce;
    Moment.locale('zh_cn');
  }
  getList(param={}) {
    let p = Object.assign({},param);
    // p.columnKey = 'column_news';
    
    return this.Models.init('Article').actions('list',{},p).then((response)=>{
      
      _.forEach(response,(item)=>{
        item.publishTime = Moment(item.publishTime).fromNow();
        if(item.showType==='multiImage' && item.coverUrl.length<3){
          for(let i=0;i<=3-item.coverUrl.length;i++){
            item.coverUrl.push({value:''});
          }
        }
        
        
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

// NewsService.$inject = ['Models','$sce'];
export default NewsService;