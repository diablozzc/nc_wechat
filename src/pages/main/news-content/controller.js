/**
 * Created by zhangzhichao on 16/7/5.
 */
class NewsContentController {
  /*@ngInject*/
  constructor($scope,$element,$timeout,$state,$stateParams,$sce,NewsService,CommentService) {
    this.prev = $state.current.data.prev;
    this.scope = $scope;
    this.sce = $sce;
    this.articleId = $stateParams.itemId;
    this.theColumnKey = 'column_' + $stateParams.column;
    this.newsService = NewsService;
    this.commentService = CommentService;

  }
  $onInit() {
    // this.scope.$emit('hideList');


    this.showHits = false;

    this.theArticle = {
      commentNum:0
    };

    // this.theArticle.publishTime = Moment(this.theArticle.publishTime).format('YYYY-MM-DD');
    this.newsService.getArticle(this.articleId).then((ret)=>{
      this.theArticle = Object.assign({},ret);
    });



    this.listOfComment = [];

    this.commentService.getComments({columnKey:this.theColumnKey,itemId:this.articleId}).then((ret)=>{
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

    this.commentService.submit(this.theColumnKey,this.articleId,comment_content).then((ret)=>{
      // console.log(ret);
      this.showHits = true;
    })
  }

  loadMoreComment() {
    // console.log('load more comments');

    let oldest_time = this.listOfComment[this.listOfComment.length-1].commentTimestamp;


    this.commentService.getComments({
        columnKey:this.theColumnKey,
        itemId:this.articleId,
        upOrDown:'up',
        time:oldest_time
      }).then((ret)=>{
      this.listOfComment = this.listOfComment.concat(ret);

    });

  }
}

export default NewsContentController;