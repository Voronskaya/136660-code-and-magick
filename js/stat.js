'use strict';

function getMaxElement(arr) {
  var max = -1;
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

function getRandomOpacity() {
  var min = 0.1;
  var opacity = Math.random() + min;
  return Number(opacity.toFixed(1));
}

function getWholeNumber(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(arr[i]);
  }
  return arr;
}

function getColorGraph(arr, user, i) {
  var color;
  if (arr[i] === user) {
    color = 'rgba(255, 0, 0, 1)';
  } else {
    color = 'rgba(25, 0, 99, ' + getRandomOpacity() + ')';
  }
  return color;
}

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

  function drawGraph() {
    getWholeNumber(times);
    for (var i = 0; i < times.length; i++) {
      ctx.fillStyle = getColorGraph(names, 'Вы', i);
      ctx.fillRect(initialX + indent * i, initialY, barWidth, -times[i] * step);
      ctx.fillStyle = '#000000';
      ctx.fillText(times[i], initialX + indent * i, initialY - times[i] * step - lineHeightTop);
      ctx.fillText(names[i], initialX + indent * i, initialY + lineHeightBottom);
    }
  }
  drawGraph();
};
