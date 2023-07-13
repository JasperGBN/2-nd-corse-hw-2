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
    case '1':
        console.log('Зима');
        break;
    case '2':
        console.log('Зима');
        break;
    case '3':
        console.log('Весна');
        break;
    case '4':
        console.log('Весна');
        break;
    case '5':
        console.log('Весна');
        break;
    case '6':
        console.log('Лето');
        break;
    case '7':
        console.log('Лето');
        break;
    case '8':
        console.log('Лето');
        break;
    case '9':
        console.log('Осень');
        break;
    case '10':
        console.log('Осень');
        break;
    case '11':
        console.log('Осень');
        break;
    case '12':
        console.log('Зима');
        break;
    default:
        console.log('Ты что-то перепутал');
        break;
}
if (Number(month)>monthNumber) {
    alert('Таких чисел месяца не существует');
}

