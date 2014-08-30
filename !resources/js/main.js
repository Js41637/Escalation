var app = angular.module('myApp', []);

app.controller('testing', function($scope) {

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

/**
 * Thanks to code from DuckieTV
 * SchizoDuckie 2014
 */
app.directive('lazyLoad', function($document, $parse) {
    return {
        restrict: 'A',
        link: function($scope, iElement, attrs) {
            iElement = angular.element(iElement);
            attrs.ngHide = true;

            /** 
             * Observe the lazy-background attribute so that when it's set on a rendered element 
             * it can fetch the new image and fade to it 
             */ 
            attrs.$observe('lazyLoad', function(newSrc) {
                if (newSrc == "") return;
                iElement.attr('oldStyle', iElement.attr('style') == null ? '' : iElement.attr('style'));
                iElement.css('background-image', 'url(!resources/spinner.gif)');
                iElement.css('background-position', 'center');
                iElement.attr('style', iElement.attr('style'));

                /** 
                 * Use some oldskool preloading techniques to load the image
                 * and fade it in when done 
                 */
                var img = $document[0].createElement('img');
                img.onload = function() {
                    iElement.attr('style', iElement.attr('oldStyle'));
                    iElement.css('background-image', 'url(' + this.src + ')');
                };
                img.onerror = function(e) {
                    console.log("image load error!", e);
                    iElement.css({
                        'opacity': '1'
                    });
                };
                attrs.ngHide = false;
                img.src = newSrc;
            });

        }
    };
})
