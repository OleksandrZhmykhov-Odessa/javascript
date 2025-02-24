let arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" //такі не підходять
    }
];

// Регулярний вираз для перевірки email
const emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@[a-zA-Z]+\.(gmail\.com|yahoo\.com)$/;

// Фільтрація та отримання масиву підходящих email
let filteredEmails = arr
    .map(user => user.email) // Витягуємо всі email
    .filter(email => emailRegex.test(email)); // Перевіряємо за regex

console.log(filteredEmails);