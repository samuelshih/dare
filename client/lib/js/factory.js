dareApp.factory('daresFactory', function($http) {
  var urlBase = '/api/dares';
  var _dareService = {};
 
  _dareService.getDares = function() {
    return $http.get(urlBase);
  };
 
  _dareService.saveDare = function(dare) {
    return $http.post(urlBase, dare);
  };
 
  _dareService.updateDare = function(dare) {
    return $http.put(urlBase, dare);
  };
 
  _todoService.deleteTodo = function(id) {
    return $http.delete(urlBase + '/' + id);
  };
 
  return _dareService;
});