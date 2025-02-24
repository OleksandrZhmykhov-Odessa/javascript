const regex = /\b[^aA\s]{6,}\b/g;
const text = "Wonderful Joyful Happiness Time Task Apple";
const matches = text.match(regex);

console.log(matches); // ["Wonderful", "Joyful"]