const number = 16
const float = 16.5
const str = "Hello"
const bool = false
const undef = undefined
const nullVar = null

const square = (n) => {
    return n*n
}

const hello = (name) => {
    return `Hello, ${name}`
}

const concat = (strings) => {
    let str = ""
    strings.forEach(s => {
        str += s
    });
    return str
}

const getType = (value) => {
    return typeof value
}

const max = (a, b) => {
    if (a > b) return a
    else return b
}

const max3 = (a, b, c) => {
    if (a > b && a > c) return a
    else if (b > a && b > c) return b
    else return c
}

const change = (N, C, K, L) => {
    if (N - K >= 0 && L - C >= 0) return `${N-K}.${L-C}`
    return 'not enough'
}

const triangle = (height) => {
    let triangle = ''
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < i; j++) {
            triangle += '#'
        }
        triangle += '\n'    
    }
    triangle += '\n'    
}

const fizzbuzz = (N) => {
    let arr = []
    for (let index = 1; index <= N; index++) {
        if (index % 3 === 0) arr.push("Fizz")
        else if (index % 5 === 0) arr.push("Buzz")
        else arr.push(index)
    }
}

const countChar = (str, char = 'c') => {
    let count = 0
    let charsOfStr = [...str]
    charsOfStr.forEach(c => {
        if (c === char) count++
    });
    return count
}

// 🚫 don't edit this export
module.exports = {
    number, float, str, bool, undef, nullVar,
    square,
    hello,
    concat,
    getType,
    max,
    max3,
    change,
    triangle,
    fizzbuzz,
    countChar
}
