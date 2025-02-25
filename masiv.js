let arr = [
    { userName: "Test", lastName: "Test", email: "test.test@gmail.com" },
    { userName: "Dmitro", lastName: "Porohov", email: "dmitro.porohov@yahoo.com" },
    { userName: "Andrii", lastName: "", email: "andrii@mail.ru" },
    { userName: "John", lastName: "Doe", email: "john_doe123@gmail.com" },
    { userName: "Invalid", lastName: "User", email: "invalid-email@gmail" },
];

const trustedEmails = arr
    .map(user => user.email) // Беремо тільки email
    .filter(email => /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/.test(email)); // Перевіряємо email

console.log(trustedEmails);
