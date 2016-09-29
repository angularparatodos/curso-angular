var app = angular.module("angular-example-app", []);

app.controller("recordatorio-controller", function($scope) {
    $scope.saludo = "Recordatorios taller de AngularJS";
    
   $scope.recordatorios = [
       {"dia": 1, "mensaje": "hola"},
       {"dia": 2, "mensaje": "chau"},
   ] 
});