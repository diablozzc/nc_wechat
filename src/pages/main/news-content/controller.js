/**
 * Created by zhangzhichao on 16/7/5.
 */
import Moment from 'moment';
class NewsContentController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state,$stateParams,$sce) {
    this.prev = $state.current.data.prev;
    this.sce = $sce;
  }
  $onInit() {
    this.theArticle = {
      title:'为什么中国国产航母飞行甲板即将完工？但军事专家却高兴不起来',
      coverUrl:'http://linkms/dist/video_cover.jpg',
      videoUrl:this.sce.trustAsResourceUrl("http://linkms/dist/video_demo.mp4"),
      content:require('./test_article_content.html'),
      publishTime:'2016-06-22T00:20:00.000Z',
      source:'居委会大妈'
    };

    this.theArticle.publishTime = Moment(this.theArticle.publishTime).format('YYYY-MM-DD');

    this.listOfComment = [{
      name: 'Airyland',
      avatar: 'http://linkms/dist/1.png',
      time: '昨天',
      like_num: 99,
      content: '沙发',
      has_praised: true,
      reply_list: [{
        content: '恭喜~',
        time: '今天早上'
      }]
    }, {
      name: 'Vux',
      avatar: 'http://linkms/dist/2.jpg',
      time: '未来时间',
      like_num: 0,
      content: '板凳'
    }, {
      name: 'Secret',
      avatar: 'http://linkms/dist/3.jpg',
      time: '未来时间',
      like_num: 99,
      content: '居然没抢到沙发'
    }];
    
    this.showPopup = false;

  }
  
  showCommentForm() {
    this.showPopup = true;
  }

  onCloseComment() {
    this.showPopup = false;

  }

  loadMoreComment() {
    console.log('load more comments');
    this.listOfComment.push({
      name: 'Secret',
      avatar: 'http://linkms/dist/3.jpg',
      time: '未来时间',
      like_num: 99,
      content: '居然没抢到沙发'
    })
  }
}



// NewsContentController.$inject = ['$scope','$element','$timeout','$state','$stateParams','$sce'];
export default NewsContentController;