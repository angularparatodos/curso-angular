var app = angular.module("angular-example-app", []);

app.controller("recordatorio-controller", function($scope) {
    $scope.saludo = "Recordatorios taller de AngularJS";
    
   $scope.recordatorios = [
       {"dia": 16, "mensaje": "trivia, en Argentina se come ensalada rusa, la ensalada de papa,huevo,zanahoria arveja.....será ensalada Argentina en moscu?"},
       {"dia": 17, "mensaje": "17, la desgracia,esta dedicatoria esta dirigida a la ' generación dorada'"},
       {"dia": 18, "mensaje": "18, un recordatorio mayor de edad,ya puede ir preso"},
       {"dia": 19, "mensaje": "19,cual es el tono favorito del pelado Cordera? La menor"},
       {"dia": 20, "mensaje": "20 , esta dedicatoria esta dedicada a los caídos del 20-12-01, kosteki y santillan"},
       {"dia": 21, "mensaje": "21, Ricardo Vilca y su orquesta andina"},
       {"dia": 22, "mensaje": "rincón del humor,en que medio se transportan 6 músicos? En do re mi"},
       {"dia": 23, "mensaje": "23, air jordan"}
   ] 
});