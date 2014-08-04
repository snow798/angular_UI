/**
 * Created by yqh798 on 14-8-4.
 */
angular.module('angulerTestApp')
    .controller('FormCtrl', function ($scope) {
        $scope.magess= {
            txt: '你好！'
        };
        $scope.user= {
            username: 'dd',
            password: '',
            repassword: '',
            meail: '',
            sex: ''
        };
        $scope.submit=function(){
            $scope.magess.txt= '请输入完整的注册信息';
        };

    });
