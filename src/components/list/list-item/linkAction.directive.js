/**
 * Created by zhangzhichao on 16/7/5.
 */
const LinkAction = ($state,$compile,$parse)=>({
  restrict:'A',
  link($scope,$element,$attrs){
    $element.on('click',()=>{
      let param = $parse($attrs.linkActionParam);
      let actionData =(param($scope));
      let action = $parse($attrs.linkAction);
      action($scope)(actionData);
    });

    $scope.go = function(actionData){
      // console.log(actionData);
      $state.go(actionData.uri,actionData.param);
    }
  }
});

LinkAction.$inject = ['$state','$compile','$parse'];

export default LinkAction;