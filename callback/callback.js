function calling(x, y, callback) {
    return callback(x, y)
}

function plus(x, y) {
    return x + y
}

function divite(x, y) {
    return x / y
}


let x = 5
let y = 7
const result = calling(x, y, plus)
const resulted = calling(x, y, divite)
console.log(result)

function create(request, callback) {
    return callback(request)
}

function add(request) {
    let x = "응답"
    request = x
    return request
}

console.log(create("요청", add))









