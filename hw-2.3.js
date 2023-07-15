// Задание 1
let password = 'пароль';
let sign = prompt('Введите пароль');
sign===password?alert('Пароль введен верно'):alert('Пароль введен неверно');
// if(sign === password){
//     alert('Пароль введен верно');
//     }else {
//         alert('Пароль введен неверно');
//     }

// Задание 2
let c = prompt('Введите число');
if(c>=0&&c<=10){
    alert('Верно');
}else{
    alert('Неверно');
}

//Задание 3
let d = prompt('Введите первое число');
let e = prompt('Введите второе число');
if(d>=100||e>=100){
    alert('Верно');
}else{
    alert('Неверно')
}

//Задание 4
let a = '2';
let b = '3';
// //код выше запрещено изменять

alert(Number(a) + Number(b));
// let art = Number(a);
// let bin = Number(b);
// alert(art+bin);

// Задание 5
let monthNumber = 12;
let month = prompt('Введите число месяца и узнаете сезон года');
switch (month) {
    case '12':
    case '1':
    case '2':
        alert('Зима');
        break;
    case '3':
    case '4':
    case '5':
        alert('Весна');
        break;
    case '6':
    case '7':
    case '8':
        alert('Лето');
        break;
    case '9':
    case '10':
    case '11':
        alert('Осень');
        break;
    default:
        alert('Ты что-то перепутал');
        break;
}
if (Number(month)>monthNumber) {
    alert('Таких чисел месяца не существует');
}

