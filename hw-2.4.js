//Задание 1
let i = 0;
while(i<2){
    console.log("Привет");
    i++;
}

// Задание 2
let h = 1;
while(h<=5){
    console.log(h);
    h++;
}


// Задание 3
let m = 7;
while(m<=22){
    console.log(m);
    m++;
}


// Задание 4
let obj = {'Коля': 200, 'Вася':300, 'Петя': 400};

for(pay in obj){
    console.log([pay]+ ' - Зарплата '+ obj[pay]+' долларов');
}


// Задание 5
let n = 1000;
let num = 0;
while (n > 50){
    num++;
    n /= 2;
}
console.log(n);
console.log(num);


// Задание 6
let day = 2;
let month = 31;
while (day<month) {
    console.log('Сегодня пятница,' +[day] +'-е число. Необходимо подготовить отчёт.');
    day += 7;
    if (day>month) {
        break;
    }
}