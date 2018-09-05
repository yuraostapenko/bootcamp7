let userInput;
const numbers = [];
let total = 0;

do {
    userInput = prompt('Enter number');
    if (isNaN(userInput)) {
        alert('Not a number, try again!');
        continue;
    }
    if (userInput === null) {
        break;
    }
    numbers.push(+userInput);
} while (true);

for (let item of numbers) {
    total = total + item;
}
console.log(numbers);
alert(`Сумма: ${total}`);