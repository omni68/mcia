angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, ResidentSvc, $filter) {
	var setResidents = function(residents){
		$scope.residents = residents;
	};

	var search = function(){
		if($scope.searchParams.name && $scope.searchParams.name.length >= 3){
			$scope.filteredResidents = $filter('filter')($scope.residents, $scope.searchParams.name);
		}
		else {
			$scope.filteredResidents = [];
		}
	};

	var init = function(){
		ResidentSvc
		.all()
		.then($scope.setResidents);
	};

	$scope.init = init;
	$scope.setResidents = setResidents;
	$scope.search = search;
	$scope.searchParams = {};
	$scope.filteredResidents = [];
	$scope.noSearchResultsMessage = "no search results found, please type at least three (3) characters to begin";
	$scope.init();
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
