app.controller('UserController', function($scope, $http) {
    $scope.groups = [];
    $scope.input = {};
    $scope.importdata = {};
    $scope.importdata.data = "";
    $scope.startPage = function() {
        $scope.loaduser();
    };


    $scope.actionSave = function() {
        console.log($scope.input)
        $http.post('../api/UserSave.php', $scope.input).then(res => {
            if (res.data.message == 'success') {
                alertify.success('บันทึกข้อมูลเรียบร้อย');
                $scope.loaduser();
            }
            $('#modalUser').modal('hide');
        });
    };


    $scope.loaduser = function() {
        $http.post('../api/User.php').then(res => {
            $scope.users = res.data.user;
            console.log(res.data.user)
        });
    };

    $scope.modalAdd = function() {
        $scope.input = {};
        $('#modalUser').modal('show');
    };

    $scope.modalEdit = function(input) {
        $scope.input = {};
        $scope.input = input;
        $('#modalUser').modal('show');
    };

    $scope.delete = function(input) {
        var name = "ประเภทสินค้า: " + input.group_product_name;
        alertify.confirm('ยืนยันการลบข้อมูล', name, function() {
            $http.post('../api/UserDelete.php', input).then(function(res) {
                if (res.data.message == 'success') {
                    alertify.success('ลบข้อมูลเรียบร้อย');
                    $scope.loaduser();
                } else if (res.data.message == 'Found') {
                    alertify.error('มีสินค้าในประเภทสินค้านี้อยู่ ไม่สามารถลบประเภทสินค้านี้ได้');
                }
            });
        }, function() {
            alertify.error('ยกเลิก')
        });
    };
});