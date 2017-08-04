angular.module('myApp', [])
    .controller('demoCtrl', ['$scope', '$http', function ($scope, $http) {
        $http({
            method: 'get',
            url: './js/data.json'
        }).then(function (res) {
            for(var i=0;i<res.data.length;i++){
                res.data[i].isEdit=false;
            }
            //  console.log(res.data);
            $scope.taskList = res.data;
        })


        $scope.addTask = function () {
            if ($scope.task) {
                $scope.taskList.push({
                    id: Math.random(),
                    name: $scope.task,
                    isCompleted: false
                })
            } else {
                $scope.task = '请输入任务名称：';
            }

            $scope.task = '';
        }

        $scope.deleteTask = function (id) {
            for (var i = 0; i < $scope.taskList.length; i++) {
                if ($scope.taskList[i].id == id) {
                    $scope.taskList.splice(i, 1);
                }
            }

        }

        $scope.taskList = [];

        $scope.countNum = function () {
            var count = 0;
            for (var i = 0; i < $scope.taskList.length; i++) {
                if (!$scope.taskList[i].isCompleted) {
                    count++;
                }
            }
            return count;
        }


        $scope.condition = '';
        $scope.selectClick = function (seletor) {
            switch (seletor) {
                case 'All':
                    $scope.condition = '';
                    break;

                case 'Active':
                    $scope.condition = false;
                    break;

                case 'Completed':
                    $scope.condition = true;
                    break;
            }

        }

        $scope.deleteCom = function () {
            for (var i = 0; i < $scope.taskList.length; i++) {
                if ($scope.taskList[i].isCompleted == true) {
                    $scope.taskList.splice(i, 1);
                    i--;
                }
            }
        }

        $scope.selsctAll=function(){
            for (var i = 0; i < $scope.taskList.length; i++) {
                $scope.taskList[i].isCompleted=$scope.status; 
            }
        }

        $scope.changeStatus=function(){
            $scope.status=true;
             for (var i = 0; i < $scope.taskList.length; i++) {
                if (!$scope.taskList[i].isCompleted) {
                   $scope.status=false;
                }
            }    
        }

        $scope.modifyStatus=function(id){
            for (var i = 0; i < $scope.taskList.length; i++) {
                if($scope.taskList[i].id==id){
                    $scope.taskList[i].isEdit=true;
                }else{
                    $scope.taskList[i].isEdit=false;
                }
            }  
        }

        $scope.leaveIpt=function(){
            for (var i = 0; i < $scope.taskList.length; i++) {
                $scope.taskList[i].isEdit=false; 
            }
        }


    }])