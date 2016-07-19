/**
 * Created by zhangzhichao on 16/7/19.
 */

class FeedbackService {
  /*@ngInject*/
  constructor(Models) {
    this.Models = Models;
  }
  getList(param={}) {
    
  }
  

  feedback(param={}){
    let p = Object.assign({},param);

    return this.Models.init('Feedbacks').actions('submit',p).then((response)=>{

      return response;
    });
  }
}


export default FeedbackService;