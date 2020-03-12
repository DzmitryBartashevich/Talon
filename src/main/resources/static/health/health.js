function hide() {
    $('#collapseOne').hide();    
}


let bool1 = true;
let bool2 = true;

let tiket = angular.module('Tiket', []);

tiket.controller('HealthController', function($scope, $http, $window) {
    $('#validator_filled').hide();
    $('#validator_correct').hide();


	  const readHealth = _ => {
        $http.get("http://localhost:8080/health")
        .then(function(response) {
            $scope.health = response.data
        })
    }

    readHealth();


    $scope.deleteTiket = function(id) {
    	$http.delete(`http://localhost:8080/health/delete/${id}`)
        .then(readHealth)
    }



    $scope.hideButton = function() {
        if (bool1) {
            $('#collapseOne').show();            
            $scope.addHide = false;
            $scope.updateHide = true;
            $('#id_').hide();
            bool1 = false;
            bool2 = true;

        } else {
            $('#collapseOne').hide();            
            $scope.updateHide = false;
            $scope.addHide = true;
            bool1 = true;
        }
    }


    $scope.addTiket = function() {
        $('#validator_filled').hide();
        $('#validator_correct').hide();

        if($("#time_").val()==null||$("#fiopacienta_").val()==null||
           $("#fiovracha_").val()==null||$("#speciality_").val()==null||
           $("#cabinet_").val()==null
            ||$("#time_").val()==""||
           $("#fiopacienta_").val()==""||$("#fiovracha_").val()==""||
           $("#speciality_").val()==""||$("#cabinet_").val()==""
           ){
               $('#validator_filled').show();

           }
        // else
            // if (!/([0-9]{4})$/.test($("#date_").val())||
        //                !/^[А-Яа-яЁё\s]+$/.test($("#color_").val())||
        //                !/^[0-9]+$/.test($("#cost_").val())
        //             )
        //    {
        //        $('#validator_correct').show();
        //
        //    }
        else{
          	let data = {
                time: $("#time_").val(),
                fiopacienta: $("#fiopacienta_").val(),
                fiovracha: $("#fiovracha_").val(),
                speciality: $("#speciality_").val(),
                cabinet: $("#cabinet_").val()
                };
               // console.log(data);


            $(".collapse").collapse('hide');
                $http.post('http://localhost:8080/health', JSON.stringify(data))
                .then(readHealth)

            
                 
        }
    }


    $scope.reWriteUpd = function(id,time,fiopacienta,fiovracha,speciality,cabinet){
        if (bool2) {
            $('#collapseOne').show();    
            $('#id_').show();      
            $scope.addHide = true;
            $scope.updateHide =  false;
            bool2 = false;
            bool1 = true;
        } else {
            $('#collapseOne').hide();          
            $('#id_').hide();
            $scope.updateHide = true;
            $scope.addHide = false;
            bool2 = true;
        }

        


        $("#id_").val(id+"");
        $("#time_").val(time+"");
        $("#fiopacienta_").val(fiopacienta+"");
        $("#fiovracha_").val(fiovracha+"");
        $("#speciality_").val(speciality+"");
        $("#cabinet_").val(cabinet+"");

  
        console.log(id+" _ " +time+" _ " +fiopacienta+" _ " +fiovracha+" _ " +speciality+" _ " +cabinet);

    }




    $scope.updateTiket = function() {
         $('#validator_filled').hide();
         $('#validator_correct').hide();
 
         if($("#id_").val()==null||$("#time_").val()==null||$("#fiopacienta_").val()==null||
            $("#fiovracha_").val()==null||$("#speciality_").val()==null||
            $("#cabinet_").val()==null||$("#time_").val()==""||
            $("#fiopacienta_").val()==""||$("#fiovracha_").val()==""||
            $("#speciality_").val()==""||$("#cabinet_").val()==""
            ){
                $('#validator_filled').show();

            }
         // else if (!/[0-9]+$/.test($("#id_").val())||
         //                !/([0-9]{4})$/.test($("#date_").val())||
         //                !/^[А-Яа-яЁё\s]+$/.test($("#color_").val())||
         //                !/^[0-9]+$/.test($("#cost_").val())
         //             ){
         //        $('#validator_correct').show();
         //
         //    }
         else{

            let id = $("#id_").val();

            let data = {
                time:$("#time_").val(),
                fiopacienta: $("#fiopacienta_").val(),
                fiovracha: $("#fiovracha_").val(),
                speciality: $("#speciality_").val(),
                cabinet: $("#cabinet_").val()
            };
            $http.put(`http://localhost:8080/health/update/${id}`, JSON.stringify(data))
                .then(readHealth)
        // }
        }
    }

})
