function greet(name) {
    console.log("Hello,", name)
}

// greet("ohmin")
// let name = "oh"
// name = "ohmin"
// greet(name)

function add() {
    return "Hello world!"
}

// console.log(add())

function hamsu(x, y) {
    return x + y
}

// const result = hamsu(5, 3)
// console.log("Sum:", result)

function pulsMultiply(x, y, z) {
    return x + y * z
}

// const list = [1, 2, 3]
// console.log(pulsMultiply(list[0], list[1], list[2]))

// const result = pulsMultiply(7, 4, 1)
// console.log(result)

// function neuron(input, weight) {
// let sum = input * weight
// return sum
// }

// sum 매개변수는 값을 지정하는게 아닌 단순 곱하기 때문에 외부에서 값을 지정하지 않아도 무방
// 지역변수로 선언하는 것과 같은 효과
function neuron(input, weight, threshold, sum) {
    sum = input * weight
    if (sum > threshold) {
        return "정답"
    } else {
        return "틀림"
    }
}

function neuron(input, weight, threshold) {
    let sum = input * weight
    if (sum > threshold) {
        return "정답"
    } else {
        return "틀림"
    }
}

const input = 0.7;
const weight = 0.8;
const threshold = 0.5;
const result = neuron(input, weight, threshold)
// console.log(result)


function conditional(num, number, index) {
    let count = num * number
    if (count === index) {
        return "정답"
    } else if (count > 0) {
        return "0보다 크다"
    } else {
        return "틀림"
    }
}

const num = 10;
const number = 2;
const index = 1;
console.log(conditional(num, number, index))