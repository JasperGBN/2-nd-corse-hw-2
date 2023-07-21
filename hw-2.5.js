//Задание 1

// let a = prompt ('Введите первое число');
// let b = prompt ('Введите второе число');
function min(a,b){
    return a < b ? a : b;
}
// alert('Минимальное из этих чисел ' + min(a, b));
console.log(min(8,4));
console.log(min(6,6));

//Задание 2
// let c = prompt ('Введите любое число');
function evenOdd(c) {
    return c % 2 === 0? 'Чётное' : 'Нечётное';
}
// alert('Ваше число ' + evenOdd(c));
console.log(evenOdd(15));
console.log(evenOdd(34));

//Задание 3
//Не до конца понял формулировку заданий

//3.1
// let d = prompt('Введите любое число');
function square(d){
    return d**2;
}
console.log(square(7));
console.log(square(15));
// alert(square(d));

//3.2
// let e = prompt('Введите любое число');
function squa(e){
    return e*e;
}
console.log(squa(12));
console.log(squa(8));
// alert(degree(e));

//Задание 4
// let age = prompt('Сколько вам лет?');
function entrance(age){
    if (age<0){
        return 'Вы ввели неправильное значение';
    }   else if(age>=0&&age<=12){
        return 'Привет, друг!';
    }   else if(age>=13){
        return 'Добро пожаловать!';
    }   else {
        return 'неопределенно';
    }
}
console.log(entrance('-13'));
console.log(entrance('7'));
console.log(entrance('17'));
// alert(entrance(age));

//Задание 5
// let m = prompt('Введите первое число');
// let n = prompt('Введите второе число');
function check(m,n) {
    if (isNaN(m), isNaN(n)){
        return('Одно или оба значения не являются числом');
    }   else {
        return('Введеные данные являются числом');
    }
}
console.log(check('xvz','asd'));
console.log(check('213','sdg'));
console.log(check('176','982'));
// alert(check(m,n));

//Задание 6
let p = prompt('Введите число');
function cube(p){
    if (isNaN(p)){
        return('Переданный параметр не является числом');
    }   else{
        return ('Ваше числов в кубе равняется ' + p**3);
    }
}
console.log(cube(p));
alert(cube(p));


//Задание 7
//Не смог поняьб и выполнить данное задание(((