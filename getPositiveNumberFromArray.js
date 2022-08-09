function get_positive_number(numbers) {
    const positiveNumber = [];
    const negativeNumber = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            positiveNumber.push(numbers[i]);
        }
        else {
            break;
        }
    }
    return positiveNumber;
}

const numbers = [10, 50, 78, 90, -100, 70, 0];

const positiveNumber = get_positive_number(numbers);
console.log(positiveNumber);