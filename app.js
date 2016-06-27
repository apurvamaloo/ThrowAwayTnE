


angular.module("oneDirectionTree",['ngMaterial', 'ngMessages','ngMdIcons'])
.controller("ctrl",["$scope",function($scope,$timeout, $q, $log){
  console.log("inside controller");
  $scope.userState;
  $scope.arrayOfNodes=[{"city":"",stay:[]},
  {"city":"",stay:[]},{"city":"",stay:[]}];
  $scope.address = ["EC1","EC2","EC3"];
  $scope.modes = ["Flight","Train","Bus"];
  $scope.legs=[{"from":"","to":"","mode":"Flight","date":new Date},
  {"from":"","to":"","mode":"Train","date":new Date}];
  $scope.currentLegIndex=0;
  $scope.currentLeg=$scope.legs[$scope.currentLegIndex];
  $scope.searchText=[];
  $scope.clickedNode=function(index)
  {

    console.log("index is");
    console.log(index);
    if(index==$scope.legs.length)
    {
      $scope.currentLegIndex=index-1;
    }
    else
    {
      $scope.currentLegIndex=index;
    }
    console.log($scope.currentLegIndex);
    // $scope.searchText1=null;
    //   $scope.searchText2=null;
    //     $scope.searchText3=null;
    //       $scope.searchText4=null;

  }
  $scope.addLeg=function()
  {
    console.log("add leg called");
    $scope.legs.push({"from":"","to":"","mode":"","date":new Date});
    $scope.arrayOfNodes.push({"city":"","stay":[]});
    // $scope.currentLegIndex=$scope.currentLegIndex+1;
  }
  $scope.next=function()
  {
    //  if($scope.currentLegIndex< (($scope.currentLeg.length*2)-1))
    $scope.currentLegIndex=$scope.currentLegIndex+1;;
  }
  $scope.prev=function()
  {
    if($scope.currentLegIndex>0)
    $scope.currentLegIndex=$scope.currentLegIndex-1;;
  }


  $scope.addStay=function()
  {
    $scope.arrayOfNodes[$scope.currentLegIndex].stay.push({"from":"","address":"","checkIn":Date,"checkOut":Date});
    // console.log($scope.currentLeg.stayFrom);
    // $scope.currentLeg.stayFrom.push({"from":"","address":"","checkIn":"","checkOut":""});

  }
  $scope.addToStay=function()
  {
    //console.log($scope.currentLeg.toStay);
    $scope.arrayOfNodes[$scope.currentLegIndex+1].stay.push({"from":"","address":"","checkIn":Date,"checkOut":Date});

  }

  ///code  for autoCompleteController
  $scope.states        = loadAll();
  $scope.selectedItem  = null;
  $scope.searchText    = null;
  $scope.querySearch   = querySearch;

  // ******************************
  // Internal methods
  // ******************************

  /**
  * Search for states... use $timeout to simulate
  * remote dataservice call.
  */
  function querySearch (query) {
    var results = query ? $scope.states.filter( createFilterFor(query) ) : $scope.states;
    return results;
    // var deferred = $q.defer();
    // $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
    // return deferred.promise;
  }

  /**
  * Build `states` list of key/value pairs
  */
  function loadAll() {
    var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
    Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
    Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
    Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
    North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
    South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
    Wisconsin, Wyoming';

    return allStates.split(/, +/g).map( function (state) {
      // return {
      //   value: state.toLowerCase(),
      //   display: state
      // };
      return state;
    });
  }

  /**
  * Create filter function for a query string
  */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);

    return function filterFn(state) {
      return (state.toLowerCase().indexOf(lowercaseQuery) === 0);
    };

  }
}]);
