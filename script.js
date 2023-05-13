

let numbers = [33, 5, 3, 7, 9, 48, 12, 33, 5];
//prev - вычисляеое значение
//prev = numbers[0] - если не указываем вторым параметром!!
// item = numbers[1] -если не указали prev вторым параметром
let b = numbers.reduce((prev, item, index, numbers) => {
  console.log('prev---', prev, 'item---', item);
  return prev + item;
});

let c = numbers.reduce((prev, item, index, numbers) => {
  if (prev < item) {
    return item;
  } else {
    return prev;
  }
}, 0);

let f = numbers.reduce((prev, item, index, numbers) => {
  if (prev[1] < item) {
    return [index, item]
  } else {
    return prev
  }

}, [0, numbers[0]]);

console.log(f);








/* нам необходимо найти контейнер, вмещающий максимальное количество воды (11. Container With Most Water). Эта задача помечена Medium уровнем сложности на Leetcode.

На вход нам подается массив с числами. Каждое число представляет собой вертикальную линию заданной высоты. Все линии находятся друг от друга на расстоянии 1. Нам необходимо найти такие 2 линии (2 числа) из этого массива, которые, образуя "контейнер", дадут максимально возможное количество воды. В качестве ответа необходимо вернуть максимальный  "объем"  воды для данного массива с числами. 

Для решения данной задачи мы будем использовать популярный алгоритм с двумя указателями (two pointers).

Длина массива от 2 до 100 000. А значения в массиве могут быть от 0 до 10 000.  */

const river = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const river2 = [0, 0, 7];

const getWater = (river) => {
  let biggerAmountWater = 0;
  /* let leftIndex = river.indexOf(river[0]); */
  /*  let rightIndex = river.indexOf(river[river.length - 1]); */
  let leftIndex = 0;
  let rightIndex = river.length - 1;
  console.log(leftIndex);
  console.log(rightIndex);
  while (leftIndex != rightIndex) {
    let currentAmountWater = Math.min(river[leftIndex], river[rightIndex]) * (rightIndex - leftIndex);
    if (biggerAmountWater < currentAmountWater) {
      biggerAmountWater = currentAmountWater;
    }

    if (river[leftIndex] < river[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
  console.log(biggerAmountWater);
};
getWater(river);






/* Условия задачи следующие: на вход подается массив интервалов (от и до).
  К примеру, речь идет о начале и окончании встреч. На выход вы должны вернуть новый массив интервалов,
  в котором будут помечены все занятые встречами отрезки времени. Если два каких-то митинга пересекаются,
  то в результат должен попасть один отрезок времени с самым ранним началом и самым поздним окончанием из этих двух встреч.
  Митинги также считаются пересекающимися, если один начинается ровно тогда, когда закончился предыдущий. */
let input = [[1, 3], [2, 6], [8, 10], [15, 18]]; //[[1,6], [8, 10], [15, 18]]
let input2 = [[1, 4], [4, 5]]; // [[1, 5]]
let asd = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]];

const mergeIntervals = (data) => {
  let sortedArr = data.sort((a, b) => {
    return a[0] - b[0];
  });
  console.log(sortedArr);
  let res = [sortedArr[0]];
  console.log(res);
  for (let i = 1; i < sortedArr.length; i++) {
    let recent = res[res.length - 1];
    console.log(recent);
    if (recent[1] >= sortedArr[i][0]) {

      console.log(sortedArr[i][1]);
      recent[1] = Math.max(recent[1], sortedArr[i][1]);
    }
    else {
      res.push(sortedArr[i]);
    }
  }
  console.log('res', res);
};
mergeIntervals(input);
/* const mergeIntervals = (data) => {
  console.log(data);
  let sortedArr = data.sort((a, b) => {
    return a[0] - b[0];
  });
  console.log("Sorted array: ", sortedArr);
 
  let res = [sortedArr[0]];
  for (let i = 0; i < sortedArr.length; i++) {
    let recent = res[res.length - 1];
    console.log(recent);
    if (recent[1] >= sortedArr[i][0]) {
      recent[1] = sortedArr[i][1];
    }
    else {
      console.log('else');
      res.push(sortedArr[i]);
    }
  }
  console.log('res', res);
};
console.log(asd);
mergeIntervals(asd); */









/* будем использовать алгоритм с созданием хешмапа. По условиям: необходимо написать функцию, которая принимает на вход два массива с числами. На выходе мы должны вернуть новый массив, который будет в себе содержать только те элементы, которые встречались в обоих массивах. Важно заметить, что если в первом массиве у нас было, например, три двойки, а во втором массиве было четыре двойки — в результирующем массиве их должно быть три. Так как три двойки встречались и в первом, и во втором массиве. */


const inp1 = [1, 2, 2, 1];
const inp2 = [2, 2];

const inp3 = [4, 9, 5];
const inp4 = [9, 4, 9, 8, 4];

const intersect = function (arr1, arr2) {
  const map = {};
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    map[arr1[i]] ? map[arr1[i]] = map[arr1[i]] + 1 : map[arr1[i]] = 1;
    //map[arr1[i]] = map[arr1[i]] ? map[arr1[i]] + 1 : 1;
  }
  for (let k = 0; k < arr2.length; k++) {
    if (arr2[k] in map && map[arr2[k]] > 0) {
      res.push(arr2[k]);
      map[arr2[k]] -= 1;
    }
  }
  console.log(map);
  console.log(res);
};

intersect(inp3, inp4);









/* задачи по поиску чисел из последовательности Фибоначчи: через цикл избыточный, через цикл оптимальный и через рекурсию. Вариант с рекурсией часто спрашивают на собеседованиях. И используют для изучения самой рекурсии, т.к. для того чтобы понять, что такое рекурсия — надо знать, что такое рекурсия :). Вариант решения через цикл будет работать значительно быстрее варианта с рекурсией. */

function fibonacci(num) {
  const result = [0, 1];
  for (let i = 2; i <= num; i++) {
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
  }
  return result[num];
};
console.log(fibonacci(7));


function fibrecursia(num) {
  if (num < 2) {
    return num;
  }
  return fibrecursia(num - 1) + fibrecursia(num - 2);
};
console.log(fibrecursia(10));









/* Кирпичная стена (554. Brick Wall). На LeetCode она Medium уровня сложности. Эту задачу нам прислал один из подписчиков, которому она попалась на собеседовании. Поэтому спасибо за вашу активность, присылайте еще! По условию: у нас есть прямоугольная кирпичная стена высотой n кирпичей. Все кирпичи одинаковой высоты, но могут быть различной ширины. В каждом ряду может быть разное количество различных кирпичей, но ширина всех рядов кирпичей всегда будет одинакова. Если провести вертикальную линию по стене, то такая линия будет пересекать какое-то количество кирпичей. Необходимо найти, какое минимальное количество кирпичей может пересекать такая вертикальная линия. Важно отметить, что если линия проходит на стыке двух кирпичей, то это не считается пересечением. Еще один момент — мы не можем провести линию с одной из сторон стены — линия должна быть именно во внутренней части стены. */

let wall = [[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]];

const leastBricks = (wall) => {
  const map = {};
  let max = 0;
  wall.forEach(row => {
    let sum = 0;
    for (let n = 0; n < row.length - 1; n++) {
      sum += row[n];
      map[sum] = map[sum] ? map[sum] + 1 : 1;
      max = Math.max(map[sum], max);
    }
  })
  console.log(map);
  return wall.length - max;
};
console.log(leastBricks(wall));







/* а Литкоде эта задача easy уровня сложности. На мой взгляд, не такая уж она и easy — не каждый новичок сходу сам осилит. По условиям: на вход нам приходит строка, содержащая только символы скобок. Следующие символы скобочек: ( ) { } [ ]. Необходимо написать функцию, которая проверит такую строку и вернет в результате true или false — в зависимости от того, является ли данная последовательность скобок валидной или нет. Вот несколько примеров, чтоб разобраться, что такое валидная, а что такое невалидная последовательность скобок: "()" // true "()[]{}" // true "(]" // false "([)]" // false "{[]}" // true Длина нашей строки может быть от 1 до 10 000 символов. По условию это все. */

let s1 = '()'; //true
let s2 = '()[]{}'; //true
let s3 = '(]'; //false
let s4 = '{[]}'; //true
let s5 = '([)]'; //false
let s6 = '{[[]{]}}()()'; //true


const checkBrackets = (s) => {
  let stack = [];
  const typeOfBrackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  const closedBrackets = [')', ']', '}'];
  for (let i = 0; i < s.length; i++) {
    if (closedBrackets.includes(s[i])) {
      if (typeOfBrackets[s[i]] != stack.pop()) return false;
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length == 0;
};

console.log(s1, checkBrackets(s1));
console.log(s2, checkBrackets(s2));
console.log(s3, checkBrackets(s3));
console.log(s4, checkBrackets(s4));
console.log(s5, checkBrackets(s5));
console.log(s6, checkBrackets(s6));








/* И сегодня условие таково: на вход подается массив с числами — цена акций в каждый конкретный день. Необходимо найти максимальную прибыль, которую можно заработать, продавая и покупая акции. В отличии от первой версии задачи (смотреть здесь: • Задача с JS собес... ) в этот раз мы можем покупать и продавать акции столько раз, сколько захотим. Но мы не можем докупать их, а только купить-продать, купить-продать. То есть после покупки и перед следующей покупкой у нас должна быть обязательная операция продажа. Сложность этой версии задачи на Leetcode easy */
let arr = [7, 1, 5, 3, 6, 4];
let fn = () => {
  let profit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      profit += arr[i + 1] - arr[i];
    }
  }
  console.log(profit);
};
fn();

/* let merge = function (intervals) {
    if (intervals.length == 0) return [];
    if (intervals.length == 1) return intervals;
  
    intervals.sort((a, b) => {
      return a[0] - b[0];
    });
  
    let result = [intervals[0]];
  
    for (let interval of intervals) {
      let recentInterval = result[result.length - 1];
      if (recentInterval[1] >= interval[0]) {
        recentInterval[1] = Math.max(recentInterval[1], interval[1]);
      } else {
        result.push(interval);
      }
    }
    return result;
  };

  console.log(merge(input));
  console.log(merge(input2)); */





/* First Unique Character in a String — Первый уникальный символ в строке. Условия следующие: нам необходимо написать функцию, которая принимает в качестве аргумента строку и возвращает индекс первого уникального символа. Если мы не найдем ни одного уникального символа, то функция должна вернуть -1. Дополнительные ограничения: 1) длина строки может быть от 1 до 10^5; 2) строка содержит только буквы английского алфавита в нижнем регистре. В этом видео я решил использовать new Map для создания хешмапов. Вы можете вполне использовать и обычный объект — для данной задачи разницы нет. Выбрал Map, чтоб было, как "по классике". */





const uniqStr1 = 'leetcode'; //0
const uniqStr2 = 'loveleetcode'; //2
const uniqStr3 = 'aabb'; //-1

const firstUniqChar = (str) => {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], map.has(str[i]) ? map.get(str[i]) + 1 : 1);
  }
  console.log(map);
  for (let [char, quantity] of map) {
    if (quantity == 1) {
      return str.indexOf(char);
    }
  }
  return -1;
};
console.log('uniqStr1---', firstUniqChar(uniqStr1));
console.log('uniqStr2---', firstUniqChar(uniqStr2));
console.log('uniqStr3---', firstUniqChar(uniqStr3));














/* Эта задача middle уровня сложности на Leetcode.

    По условиям задачи: необходимо посчитать количество островов в матрице. Островом считаются единицы (1), которые находятся друг рядом с другом по горизонтали и по вертикали. Водой считаются ячейки матрицы с нулями. 
    
    Для решения данной задачи мы используем с вами алгоритм DFS (depth first search). С его помощью мы решим данную задачу со сложностью O(m*n), где m — количество строк, а n — количество столбцов в матрице. */





let grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
];
let grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
];
let grid3 = [
  ['1', '0', '1', '0', '0']
];
let git  = (grid) => {
  let counter = 0;
  let rowsLength = grid.length;
  let colsLength = grid[0].length;
  if (rowsLength === 0) return 0;
  console.log('rows', rowsLength);
  console.log('cols', colsLength);

  function markNeighbour(grid, row, column) {
    grid[row][column] = 'X';
    //check left neighbor
    if (grid[row][column - 1] === '1') { markNeighbour(grid, row, column - 1) }
    //check right neighbor
    if (grid[row][column + 1] === '1') { markNeighbour(grid, row, column + 1) }
    //check top neighbor
    if (grid?.[row + 1]?.[column] === '1') { markNeighbour(grid, row + 1, column) }
    //check ищеещь neighbor
    if (grid?.[row - 1]?.[column] === '1') { markNeighbour(grid, row - 1, column) }
    
  }

  for (let row = 0; row < rowsLength; row++) {
    for (let column = 0; column < colsLength; column++) {
      if (grid[row][column] === '1') {
        counter++;
        markNeighbour(grid, row, column);
      }
    }
  }
console.log(grid);

  return counter;
};
console.log(numIslands(grid1));
console.log(numIslands(grid2));
console.log(numIslands(grid3));