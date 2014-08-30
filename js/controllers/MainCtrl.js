angular.module('TF2.controllers.main', [])

.controller('MainCtrl', function($scope) {

  $scope.items = [];
  $scope.selected = null;

  $scope.items = [
    {
      id: "0",
      name: "Force-A-Nature",
      img: "force-a-nature",
      desc: "The Force-A-Nature is a F2P's goto weapon of choice when it comes to attempting to rek",
      positive: [
        {
          name: "+2 Clip Size",
          desc: ".."
        }
      ],
      negative: [
        {
          name: "25% slower reload speed",
          desc: ".."
        }
      ]
    },
    {
      id: "1",
      name: "Minigun",
      img: "minigun",
      desc: "I dunno, something",
      positive: [
        {
          name: "+25% clip size",
          desc: ".."
        }
      ],
      negative: [
        {
          name: "15% slower fire speed",
          desc: ".."
        }
      ]
    },
    {
      id: "2",
      name: "The Sandman",
      img: "sandman",
      desc: "Throw your balls at people",
      positive: [
        {
          "name": "+25% recharge rate",
          "desc": ".."
        }
      ],
      negative: [
        {
          name: "10% slower movement speed",
          desc: ".."
        }
      ]
    },
    {
      id: "3",
      name: "Degreaser",
      img: "degreaser",
      desc: "Burneh burneh people",
      positive: [
        {
          name: "+25% afterburn damage",
          desc: ".."
        }
      ],
      negative: [
        {
          name: "15% slower movement speed",
          desc: ".."
        }
      ]
    }
  ]

  $scope.setActive = function(itemid) {
    $scope.selected = itemid;
    console.log("Selected item: ", itemid);
  }
});