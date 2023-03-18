Number = 30,
BigInt
String = ''.length
Boolean
null
undefined
Symbol

let object0 = {
    id: '0',
    name: 'User',
    description: null,
    body_template: undefined,
    city: null,
    avatar: null,
    vacancies_count: 0,
    is_relocation: false,
    salary: undefined,
}
 
let object1 = {
    id: '1',
    name: 'Женя',
    description: 'Хочу стать разработчиком ...',
    body_template: '<span>🌟</span>',
    city: 'Ульяновск',
    avatar: 'https://www.imagensempng.com.br/wp-content/uploads/2021/08/Icone-usuario-Png.png',
    vacancies_count: 13,
    is_relocation: true,
    salary: 9007199254740991n,
}
// 1) определение типа данных typeOf и ..., что он может, а что не может. Вывести переменные как есть если они не ложные, иначе убрать строку
// 2) Приведение типа id со строки к числу
// 3) проверить salary на коректное число (не NaN и не Infinite, как это определить)
// 4) String Number Boolean различные варианты приведения

let body = document.querySelector("body")

function showObject(vacancies) {
    let rezult ="";
    for (vacancy of vacancies) {
        rezult += `<div id='${vacancy.id}' class="card">
        <div><img src="${vacancy.avatar}" alt="" wight="50px" height="50px"/></div>
        <div><strong>Имя: </strong><span>${vacancy.name}</span></div>
        <div><strong>Город: </strong><span>${vacancy.city}</span></div>
        <div><strong>Описание: </strong><span>${vacancy.body_template}</span></div>
        <div><strong>Обо мне: </strong><span>${vacancy.description}</span></div>
        <div><strong>Зарплата: </strong><span>${vacancy.salary}</span></div>
        <div><strong>Количество вакансий у пользователя: </strong><span>${vacancy.vacancies_count}</span></div>
        <div><strong>Готов к релокации: </strong><span>${vacancy.is_relocation?"Да":"Нет"}</span></div>
        </div>`
    }
    body.innerHTML = rezult
}

showObject([object0,object1])