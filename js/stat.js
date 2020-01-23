'use strict';

// задаем фукцию, отрисовывающую прямоугольники на базе переменных. Общую для фона статистики(с рамкой) и для тени статистики
function drawRect(ctx, rect) {
  ctx.fillStyle = rect.fillColor;
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
  if (rect.strokeColor) {
    ctx.strokeStyle = rect.strokeColor;
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
  }
}

// вычисляем максимальное значение в массиве times
function getMaxTime(times) {
  var max = times[0];
  for (var i = 0; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }
  return max;
}

// вычисляем случайный синий цвет
function getRandomBlueColor() {
  return 'hsl(240, ' + (Math.round(Math.random() * 100)) + '%, 50%)';
}

// выводим фон статстики и тень по переменным с помощью функции
window.renderStatistics = function (ctx, names, times) {

  // парамеры гистограммы
  var statisHeight = 150; // высота гитограммы
  var histoX = 130; // координата колонок по горизонтали (от левого края)
  var histoY = 100; // координата колонок по вертикали (от верхнего края)
  var textY = 270; // координата текста (имени) по вертикали
  var step = statisHeight / getMaxTime(times); // вычисление высоты колонок
  var columnIndent = 90; // отступ между колонками (50 отступ по заданию + 40 ширина колонки)

  // тень
  drawRect(ctx, {
    'x': 110,
    'y': 20,
    'width': 420,
    'height': 270,
    'fillColor': 'rgba(0, 0, 0, 0.7)'
  });

  // поле с результатами
  drawRect(ctx, {
    'x': 100,
    'y': 10,
    'width': 420,
    'height': 270,
    'fillColor': 'white',
    'strokeColor': 'black'
  });

  // текст заголовока статистики
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, Вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  // цикл перебора значений в массивах names и times
  for (var i = 0; i < times.length; i++) {
    var height = step * times[i];

    // вычисляем координаты X и Y для начала гистограммы
    var indentX = histoX + columnIndent * i;
    var indentY = histoY + statisHeight - height;

    // выводим время с отступом от колонок на 10
    ctx.fillText(times[i].toFixed(0), indentX, indentY - 10);

    // объявляем колонку как переменную со значениями координат и высоты
    var column = {
      'x': indentX,
      'y': indentY,
      'width': 40,
      'height': height
    };

    // выводим колонки игроков случайного синего цвета, для игрока "Вы" колонка красного цвета
    column.fillColor = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomBlueColor();
    drawRect(ctx, column);

    // рисуем имя игрока
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], indentX, textY);
  }
};
