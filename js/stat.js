'use strict';

var getMaxElement = function (arr) {
  var max = -1;
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

var getRandomOpacity = function () {
  var min = 0.1;
  var opacity = Math.random() + min;
  return Number(opacity.toFixed(1));
};

var getRandomColor = function () {
  return 'rgba(25, 0, 99, ' + getRandomOpacity() + ')';
};

var getColorGraph = function (user) {
  var userColor = 'rgba(255, 0, 0, 1)';
  return user ? userColor : getRandomColor();
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 50);
  ctx.fillText('Список результатов:', 120, 70);

  var maxElement = getMaxElement(times);
  var histogramHeight = 150;
  var step = histogramHeight / (maxElement - 0);
  var barWidth = 40;
  var indent = 90;
  var initialX = 120;
  var initialY = 250;
  var lineHeightBottom = 20;
  var lineHeightTop = 5;

  var drawGraph = function () {
    var convertedTimes = times.map(Math.floor);
    for (var i = 0; i < convertedTimes.length; i++) {
      ctx.fillStyle = getColorGraph(names[i] === 'Вы');
      ctx.fillRect(initialX + indent * i, initialY, barWidth, -convertedTimes[i] * step);
      ctx.fillStyle = '#000000';
      ctx.fillText(convertedTimes[i], initialX + indent * i, initialY - convertedTimes[i] * step - lineHeightTop);
      ctx.fillText(names[i], initialX + indent * i, initialY + lineHeightBottom);
    }
  };
  drawGraph();
};
