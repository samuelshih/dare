dareApp.controller('dareCtrl', function($rootScope, $scope, daresFactory) {
 
  $scope.dares = [];
  $scope.isEditable = [];
 
  // get all Dares on Load
  daresFactory.getDares().then(function(data) {
    $scope.dares = data.data;
  });
 
  // Save a Dare to the server
  $scope.save = function($event) {
    if ($event.which == 13 && $scope.dareInput) {
 
      daresFactory.saveDare({
        "dare": $scope.dareInput,
        "isCompleted": false
      }).then(function(data) {
        $scope.dares.push(data.data);
      });
      $scope.dareInput = '';
    }
  };
 
  //update the status of the Dare
  $scope.updateStatus = function($event, _id, i) {
    var cbk = $event.target.checked;
    var _d = $scope.dares[i];
    daresFactory.updateDare({
      _id: _id,
      isCompleted: cbk,
      dare: _d.dare
    }).then(function(data) {
      if (data.data.updatedExisting) {
        _d.isCompleted = cbk;
      } else {
        alert('Oops something went wrong!');
      }
    });
  };
 
  // Update the edited Dare
  $scope.edit = function($event, i) {
    if ($event.which == 13 && $event.target.value.trim()) {
      var _d = $scope.dares[i];
      daresFactory.updateDare({
        _id: _d._id,
        dare: $event.target.value.trim(),
        isCompleted: _d.isCompleted
      }).then(function(data) {
        if (data.data.updatedExisting) {
          _d.dare = $event.target.value.trim();
          $scope.isEditable[i] = false;
        } else {
          alert('Oops something went wrong!');
        }
      });
    }
  };
 
  // Delete a Dare
  $scope.delete = function(i) {
    datasFactory.deleteDare($scope.dares[i]._id).then(function(data) {
      if (data.data) {
        $scope.dares.splice(i, 1);
      }
    });
  };
 
});
