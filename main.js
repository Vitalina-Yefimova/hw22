console.log('#5. JavaScript homework example file')

/*
 * #1
 *
 * Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
 * функція може приймати число як аргумент counter(n)
 * якщо число передано у функцію - лічба починається із зазначеного числа
 * якщо ні - то лічба триває
 */

// const counter = function() {}

// console.log(counter()) // 0
// console.log(counter()) // 1
// console.log(counter(100)) // 100
// console.log(counter()) // 101
// console.log(counter()) // 102
// console.log(counter(500)) // 500
// console.log(counter()) // 501
// console.log(counter()) // 502
// console.log(counter(0)) // 0
// console.log(counter()) // 0
// console.log(counter()) // 1


const counter = function () { // Создаётся и немедленно вызывается анонимная функция для создания замыкания, чтобы count сохраняла своё состояние между вызовами. 

  let count = 0; // Начальное значение счётчика
  
  return function (n) {
    if (n !== undefined) {
      count = n;
    };
    if (n === 0) {
      return count;
    };
    return count++;
  };
}();

console.log(counter()); 
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());

/*
 * #2
 *
 * Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */

// const counterFactory = function () {}

// console.log(counterFactory.value()) // 0
// counterFactory.increment()
// counterFactory.increment()
// counterFactory.increment()
// console.log(counterFactory.value()) // 3
// counterFactory.decrement()
// counterFactory.decrement()
// console.log(counterFactory.value()) // 1
// console.log(counterFactory.value(100)) // 100
// counterFactory.decrement()
// console.log(counterFactory.value()) // 99
// console.log(counterFactory.value(200)) // 200
// counterFactory.increment()
// console.log(counterFactory.value()) // 201


const counterFactory = function () {

  let count = 0; // Начальное значение счётчика

  return { // Возвращаем объект с методами
    value: function (n) {
      if (n !== undefined) {
        count = n;
      };
      return count;
    },
    increment: function () {
      count++; // Увеличивает значение счётчика на 1
      return count; // Возвращает новое значение счётчика
    },
    decrement: function () {
      count--; // Уменьшает значение счётчика на 1
      return count; // Возвращает новое значение счётчика
    }
  };
}();

console.log(counterFactory.value());
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value());
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value());
console.log(counterFactory.value(100));
counterFactory.decrement();
console.log(counterFactory.value());
console.log(counterFactory.value(200));
counterFactory.increment();
console.log(counterFactory.value());

/*
 * #4
 * Створіть функцію myMax(arr), яка як параметр приймає
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */

// const list = [12, 23, 100, 34, 56, 9, 233]
// const myMax = () => {}

// console.log(myMax(list)); // 233


const myMax = (arr) => {
  return Math.max.apply(null, arr);
};

const list = [12, 23, 100, 34, 56, 9, 233];
console.log(myMax(list));


/* Метод "apply" позволяет нам вызывать функцию (в данном случае Math.max) и передавать ей аргументы в виде массива.
Мы передаём null как первый аргумент, потому что Math.max не зависит от значения this, и нам не нужно использовать никакой объект.
Второй аргумент — это массив arr. 
"apply" распаковывает массив и передаёт его элементы как отдельные аргументы функции Math.max. */

/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */

// const myMul = () => {}

/*
 * Створіть функції myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції - заборонено, тільки bind() і myMul().
 * Функція повертає результат обчислення.
 */

// const myDouble

// console.log(myDouble(3)) // = myMul(2, 3) = 6
// console.log(myDouble(4)) // = myMul(2, 4) = 8
// console.log(myDouble(5)) // = myMul(2, 5) = 10

// Аналогічним чином створюємо функцію myTriple(n), яка потроює параметр, що приймає, повертаючи результат.

// const myTriple

// console.log(myTriple(3)) // = myMul(3, 3) = 9
// console.log(myTriple(4)) // = myMul(3, 4) = 12
// console.log(myTriple(5)) // = myMul(3, 5) = 15

const myMul = (a, b) => a * b;


const myDouble = myMul.bind(null, 2); // null указывает на отсутствие контекста this; фиксируем аргумент a = 2
const myTriple = myMul.bind(null, 3); // фиксируем аргумент a = 3

console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));

console.log(myTriple(3));
console.log(myTriple(4));
console.log(myTriple(5));