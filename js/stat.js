'use strict';
(function () {
  window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(100, 10, 420, 270);
    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 50);
    ctx.fillText('Список результатов:', 120, 70);

    var maxElement = window.util.getMaxElement(times);
    var histogramHeight = 150;
    var step = histogramHeight / (maxElement - 0);
    var barWidth = 40;
    var indent = 90;
    var initialX = 120;
    var initialY = 250;
    var lineHeightBottom = 20;
    var lineHeightTop = 5;

    var drawGraph = function () {
      var convertedTimes = times.map(Math.round);
      for (var i = 0; i < convertedTimes.length; i++) {
        ctx.fillStyle = window.util.getColorGraph(names[i] === 'Вы');
        ctx.fillRect(initialX + indent * i, initialY, barWidth, -convertedTimes[i] * step);
        ctx.fillStyle = '#000000';
        ctx.fillText(convertedTimes[i], initialX + indent * i, initialY - convertedTimes[i] * step - lineHeightTop);
        ctx.fillText(names[i], initialX + indent * i, initialY + lineHeightBottom);
      }
    };
    drawGraph();
  };
})();
