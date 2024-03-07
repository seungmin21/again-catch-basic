const number = 19

// if (number === "String") {
    // console.log("정답")
// } else {
    // console.log("틀림")
// }

// if (number !== 19) {
    // console.log("19가 아닙니다.")
// } else {
    // console.log("19가 맞습니다.")
// }

// if (number > 0.5) {
    // console.log("크다")
// } else {
    // console.log("작다")
// }

if (number > 0) {
    console.log("Positive number")
} else if (number === 0) {
    console.log("not same number")
} else {
    console.log("Negative number")
}

if (number % 2 === 0) {
    console.log(number, "짝수입니다.")
} else {
    console.log(number, "홀수입니다.")
}

if (number > 10 && number === 19) {
    console.log("모든 조건과 일치합니다.")
} else {
    console.log("한개의 조건이 일치하지 않습니다.")
}