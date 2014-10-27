// Register as angular module
angular.module('TF2.controllers.main', [])

//Register controller
.controller('MainCtrl', function($scope) {

  $scope.hidemsg = false;
  $scope.items = [];
  $scope.selected = null;

  // Simple database that contains all the items and their info
  $scope.items = [
    {
      id: "0",
      name: "Force-A-Nature",
      img: "force-a-nature",
      desc: "The Force-A-Nature is a F2P's goto weapon of choice when it comes to attempting to rek",
      base_positive: [
        {
          name: "+2 Clip Size",
          desc: ".."
        }
      ],
      base_negative: [
        {
          name: "25% slower reload speed",
          desc: ".."
        }
      ],
      levels: [
        {
          name: "Upgrade 1",
          cost: "$1",
          positive: [
            {
              name: "+2 Clip Size",
              desc: "..."
            }
          ],
          negative: [
            {
              name: "25% slower reload speed",
              desc: "..."
            }
          ]
        },
        {
          name: "Upgrade 2",
          cost: "$2",
          positive: [
            {
              name: "+4 Clip Size",
              desc: "..."
            }
          ],
          negative: [
            {
              name: "50% slower reload speed",
              desc: "..."
            }
          ]
        },
        {
          name: "Upgrade 3",
          cost: "$3",
          positive: [
            {
              name: "+6 Clip Size",
              desc: "..."
            }
          ],
          negative: [
            {
              name: "75% slower reload speed",
              desc: "..."
            }
          ]
        },
      ]
    },
    {
      id: "1",
      name: "Minigun",
      img: "minigun",
      desc: "I dunno, something",
      base_positive: [
        {
          name: "+25% clip size",
          desc: ".."
        }
      ],
      base_negative: [
        {
          name: "15% slower fire speed",
          desc: ".."
        }
      ],
      levels: [
        {
          name: "Upgrade 1",
          cost: "$1",
          positive: [
            {
              name: "+5 Clip Size",
              desc: "..."
            }
          ],
          negative: [
            {
              name: "5% slower spinup speed",
              desc: "..."
            }
          ]
        },
        {
          name: "Upgrade 2",
          cost: "$2",
          positive: [
            {
              name: "+10 Clip Size",
              desc: "..."
            }
          ],
          negative: [
            {
              name: "10% slower spinup speed",
              desc: "..."
            }
          ]
        },
        {
          name: "Upgrade 3",
          cost: "$3",
          positive: [
            {
              name: "+20 Clip Size",
              desc: "..."
            }
          ],
          negative: [
            {
              name: "15% slower spinup speed",
              desc: "..."
            }
          ]
        },
      ]
    },
    {
      id: "2",
      name: "The Sandman",
      img: "sandman",
      desc: "Throw your balls at people",
      base_positive: [
        {
          "name": "+25% recharge rate",
          "desc": ".."
        }
      ],
      base_negative: [
        {
          name: "10% slower movement speed",
          desc: ".."
        }
      ],
      levels: [
        {
          name: "Upgrade 1",
          cost: "$50",
          positive: [
            {
              name: "+1 ball",
              desc: "..."
            }
          ],
          negative: [
            {
              name: "5% slower speed",
              desc: "..."
            }
          ]
        },
        {
          name: "Upgrade 2",
          cost: "$100",
          positive: [
            {
              name: "+50 balls",
              desc: "..."
            }
          ],
          negative: [
            {
              name: "25% less health",
              desc: "..."
            }
          ]
        },
        {
          name: "Upgrade 3",
          cost: "$10000",
          positive: [
            {
              name: "+500 balls",
              desc: "..."
            }
          ],
          negative: [
            {
              name: "Start off with 1 HP",
              desc: "..."
            }
          ]
        },
      ]
    },
    {
      id: "3",
      name: "Degreaser",
      img: "degreaser",
      desc: "Burneh burneh people",
      base_positive: [
        {
          name: "+25% afterburn damage",
          desc: ".."
        }
      ],
      base_negative: [
        {
          name: "15% slower movement speed",
          desc: ".."
        }
      ],
      levels: [
        {
          name: "Upgrade 1",
          cost: "$2",
          positive: [
            {
              name: "+15% afterburn damage",
              desc: "..."
            }
          ],
          negative: [
            {
              name: "10% less ammo",
              desc: "..."
            }
          ]
        },
        {
          name: "Upgrade 2",
          cost: "$5",
           positive: [
            {
              name: "+20% afterburn damage",
              desc: "..."
            }
          ],
          negative: [
            {
              name: "20% less ammo",
              desc: "..."
            }
          ]
        },
        {
          name: "Upgrade 3",
          cost: "$7",
           positive: [
            {
              name: "+25% afterburn damage",
              desc: "..."
            }
          ],
          negative: [
            {
              name: "30% less ammo",
              desc: "..."
            }
          ]
        },
      ]
    }
  ]

  /* @Param = id of item in the database/array
   *
   * Function set what weapon is currently selected by ID
   */
  $scope.setActive = function(itemid) {
    $scope.selected = itemid;
    console.log("Selected item: ", itemid);
  }
});