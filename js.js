let a = document.getElementById('mek')
let b = document.getElementById('ereq')
let c = document.getElementById('erku')
let text = document.getElementById('h2')

function cal() {
    m = parseFloat(a.value)
    n = parseFloat(b.value)
    f = c.value

    if (f == '+') {
        text.innerHTML = m + n
    }
    else if (f == '-') {
        text.innerHTML = m - n
    }
    else if (f == '/') {
        if (n != 0) {
            text.innerHTML = m / n
        } else {
            text.innerHTML = "Cannot divide by zero"
        }
    }
    else if (f == '*') {
        text.innerHTML = m * n
    }
    else if (f == '**') {
        text.innerHTML = m ** n
    }
    else if (f == '%') {
        text.innerHTML = (m * n)/100
    }
    else if (f == '^') {
        text.innerHTML = m % n
    }
    else if(f != "+" || f != "-" || f != "/" || f != "*" || f != "**" || f != "%" || f != "^" || isNaN(a) || isNaN(b)){
        alert("First input - number \n\nSecond input - +, -, /, *, **, %, ^(division remainder) \n\nThird input  - number")

        text.innerHTML = "Read instruction!!!!"
        text.style.fontSize = 25 + "px"
    }
}