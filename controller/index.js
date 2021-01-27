var app = angular.module("myApp", []);
app.controller('home', function($scope,$http) {
  $scope.startPage = function() {
    console.log(JSON.parse(localStorage.getItem("profile")))
    
    // if(JSON.parse(localStorage.getItem("profile")) == undefined){
    // window.location.replace('/system_pos');
    // }
    // console.log(localStorage.getItem("profile").user_id)
    // console.log(localStorage.getItem("profile",JSON.stringify(data.data.user)));
};
  $scope.logout = function(){
    alertify.confirm('ยืนยันการออกจากระบบ ??','คุณต้องการออกจากระบบหรือไม่ !?', function() {
      window.localStorage.removeItem('profile');
      window.location.replace('/system_pos');
    }, function() {
      alertify.error('ยกเลิก')
  });

  // console.log(JSON.parse(localStorage.getItem("profile")))
  };

});