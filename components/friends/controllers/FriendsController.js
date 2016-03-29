// Generated by CoffeeScript 1.7.1
'use strict';
FriendsModule.controller('FriendsController', function($scope, $location, $window, $state, $stateParams, params, ngTableParams, LocalStorage, RestModel, currentUser) {
  $scope.currentUser = currentUser;
  $scope.openAccess = true;
  $scope.openTable = false;
  $scope.loading = false;
  $scope.params = $scope.params || LocalStorage.getItem('params');
  $scope.getListFriends = function() {
    $scope.page = 1;
    $scope.friendsOnline = [];
    $scope.openTableOnline = false;
    if (!$scope.friends) {
      $scope.loading = true;
      return RestModel.getFriends($scope.params).then(function(data) {
        $scope.countFriends = data.response.count;
        $scope.loading = false;
        $scope.friends = RestModel.isWorkingFriendsObject(data);
        return $scope.openTable = $scope.friends ? true : false;
      }, function(error) {
        return console.log(error);
      });
    } else {
      return $scope.openTable = true;
    }
  };
  $scope.getListFriendsOnlineOrDelete = function(type) {
    $scope.page = 1;
    $scope.friendsArray = RestModel.friendsOnlineOrDelete(type, $scope.friends);
    $scope.openTable = false;
    return $scope.openTableOnline = $scope.friendsArray ? true : false;
  };
  $scope.signOff = function() {
    LocalStorage.removeAllItem();
    $scope.openAccess = false;
    $scope.openTable = false;
    return $window.location = '/login';
  };
  $scope.more = function(user) {
    $state.transitionTo('user', {
      userId: user.id
    });
    return LocalStorage.setItem('page', $scope.page);
  };
  if (LocalStorage.getItem('page')) {
    $scope.getListFriends();
  }
  $scope.page = LocalStorage.getItem('page') ? LocalStorage.getItem('page') : 1;
  return $scope.pageSize = 6;
});

//# sourceMappingURL=FriendsController.map
