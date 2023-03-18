(Number = 30), BigInt;
String = "".length;
Boolean;
null;
undefined;
Symbol;

let object0 = {
	id: "0",
	name: "User",
	description: null,
	body_template: undefined,
	city: null,
	avatar: null,
	vacancies_count: 0,
	is_relocation: false,
	salary: NaN,
};

let object1 = {
	id: "1",
	name: "Женя",
	description: "Хочу стать разработчиком ...",
	body_template: "<span>🌟</span>",
	city: "Ульяновск",
	avatar:
		"https://www.imagensempng.com.br/wp-content/uploads/2021/08/Icone-usuario-Png.png",
	vacancies_count: 13,
	is_relocation: true,
	salary: 9007199254740991n,
};
// 1) определение типа данных typeOf и ..., что он может, а что не может. Вывести переменные как есть если они не ложные, иначе убрать строку
// 2) Приведение типа id со строки к числу
// 3) проверить salary на коректное число (не NaN и не Infinite, как это определить)
// 4) String Number Boolean различные варианты приведения
//прямое присвоение
// typeof, String(), Number(), Boolean()
// строки преобразуются в числа если могут, либо ставить + или -, со строками ставить кавычки

let body = document.querySelector("body");

function showObject(vacancies) {
	let result = "";
	for ({
		id,
		avatar,
		name: vacancyName,
		city,
		body_template,
		description,
		salary,
		vacancies_count,
		is_relocation,
	} of vacancies) {
		vacancyCard = `<div id='${id}' class="card">`;

		console.log(id, typeof -id);

		if (avatar) {
			vacancyCard += `<div><img src="${avatar}" alt="" wight="50px" height="50px"/></div>`;
		}

		vacancyCard += `<div><strong>Имя: </strong><span>${
			vacancyName || "Пользователь"
		}</span></div>`;

		if (city) {
			vacancyCard += `<div><strong>Город: </strong><span>${city}</span></div>`;
		}

		if (body_template) {
			vacancyCard += `<div><strong>Описание: </strong><span>${body_template}</span></div>`;
		}

		if (description) {
			vacancyCard += `<div><strong>Обо мне: </strong><span>${description}</span></div>`;
		}

		console.log("lol", typeof salary);
		if (
			typeof salary === "bigint" ||
			(!isNaN(salary) && salary !== Infinity && salary !== -Infinity)
		) {
			vacancyCard += `<div><strong>Зарплата: </strong><span>${
				salary || "Не указанно"
			}</span></div>`;
		}

		if (vacancies_count) {
			vacancyCard += `<div>
				<strong>Количество вакансий у пользователя: </strong>
				<span>${vacancies_count}</span>
			</div>`;
		}

		if (is_relocation) {
			vacancyCard += `<div><strong>Готов к релокации: </strong><span>${
				is_relocation ? "Да" : "Нет"
			}</span></div>`;
		}

		vacancyCard += `</div>`;

		result += vacancyCard;
	}
	body.innerHTML = result;
}

showObject([object0, object1]);
