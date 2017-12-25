'use strict';
(function () {
  var USER_COLOR = 'rgba(255, 0, 0, 1)';
  var COLOR_WITH_OPACITY = 'rgba(25, 0, 99, ';


  var getRandomNumber = function (length) {
    return Math.floor(Math.random() * length);
  };

  var getRandomOpacity = function () {
    var min = 0.1;
    var opacity = Math.random() + min;
    return Number(opacity.toFixed(1));
  };

  var getRandomColor = function () {
    return COLOR_WITH_OPACITY + getRandomOpacity() + ')';
  };

  window.util = {
    getColorGraph: function (user) {
      var userColor = USER_COLOR;
      return user ? userColor : getRandomColor();
    },
    getMaxElement: function (arr) {
      var max = -1;
      for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
          max = arr[i];
        }
      }
      return max;
    },
    getRandomElement: function (arr) {
      var randomIndex = getRandomNumber(arr.length);
      return arr[randomIndex];
    },
    getFullName: function (name, surname) {
      return window.util.getRandomElement(name) + ' ' + window.util.getRandomElement(surname);
    }
  };
})();
