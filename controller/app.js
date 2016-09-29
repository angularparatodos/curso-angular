var app = angular.module("angular-example-app", []);

app.controller("recordatorio-controller", function($scope) {
    $scope.saludo = "Bigo pasion";
    
   $scope.recordatorios = [
       {"dia": 1, "mensaje": "hola"},
       {"dia": 2, "mensaje": "chau"},
   ] 
});