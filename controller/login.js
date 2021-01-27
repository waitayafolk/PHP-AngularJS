app.controller("Clt_login",function ($scope, $http) {
  $scope.startPage = function() {
    // $scope.checklogin();
};
    $scope.user = {};
    $scope.login = function(){
        if($scope.user.username == undefined || $scope.user.password == undefined ){
            alertify.alert("Login Error","กรุณากรอก User และ Password", function(){});
        }else{
            $http({
                url:"api/login.php",
                method: "POST",
                data: $scope.user,
              }).then(function (data) {
                console.log(data.data.message);
                if (data.data.message == "success") {
                  localStorage.setItem("profile",JSON.stringify(data.data.user));
                  window.location.replace('/system_pos/view/?mymenu=dashbord');
                  $scope.user = {};

                }else if(data.data.message == "invalid") {
                    alertify.alert("Login Error","User or Password invalid.", function(){
                    alertify.error('Error message');
                    });
                    $scope.user = {};
                }
              });
        }
    }

  // $scope.checklogin = function(){
  //   try {
  //     if(JSON.parse(localStorage.getItem("profile")).user_id != undefined){
  //       window.location.replace('/system_pos/view');
  //     }else{
  //       window.location.replace('/system_pos');
  //     }
  //   } catch (error) {
  //   }
  // }


});
