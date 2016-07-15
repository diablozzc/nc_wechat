/**
 * Created by zhangzhichao on 16/7/5.
 */
class NewsContentController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state,$stateParams,$sce,NewsService,CommentService) {
    this.prev = $state.current.data.prev;
    this.sce = $sce;
    this.articleId = $stateParams.itemId;
    this.theColumnKey = 'column_' + $stateParams.column;
    this.NewsService = NewsService;
    this.CommentService = CommentService;
  }
  $onInit() {

    this.theArticle = {
      commentNum:0
    };

    // this.theArticle.publishTime = Moment(this.theArticle.publishTime).format('YYYY-MM-DD');
    this.NewsService.getArticle(this.articleId).then((ret)=>{
      this.theArticle = Object.assign({},ret);
    });



    this.listOfComment = [];

    this.CommentService.getComments({columnKey:this.theColumnKey,itemId:this.articleId}).then((ret)=>{
      this.listOfComment = Object.assign([],ret);
    });
    
    this.showPopup = false;

  }
  
  showCommentForm() {
    this.showPopup = true;
  }

  onCloseComment() {
    this.showPopup = false;

  }
  
  submitComment({comment_content}){
    this.CommentService.submit(this.theColumnKey,this.articleId,comment_content).then((ret)=>{
      console.log(ret);
    })
  }

  loadMoreComment() {
    console.log('load more comments');

    let oldest_time = this.listOfComment[this.listOfComment.length-1].commentTimestamp;


    this.CommentService.getComments({
        columnKey:this.theColumnKey,
        itemId:this.articleId,
        upOrDown:'up',
        time:oldest_time
      }).then((ret)=>{
      console.log(ret);
      this.listOfComment = this.listOfComment.concat(ret);

      // this.listOfComment = Object.assign({},ret);
    });

    // this.listOfComment.push({
    //   name: 'Secret',
    //   avatar: 'http://linkms/dist/3.jpg',
    //   time: '未来时间',
    //   like_num: 99,
    //   content: '居然没抢到沙发'
    // })
  }
}



// NewsContentController.$inject = ['$scope','$element','$timeout','$state','$stateParams','$sce'];
export default NewsContentController;