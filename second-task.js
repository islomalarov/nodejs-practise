// 1
function myProg() {
    console.log(`******************************
        Моя программа
******************************`);
}


// 2
function calc(firstNum, secondNum, sign) {
    let result = 0;
    switch (sign) {
        case '+': result = firstNum + secondNum; break;
        case '-': result = firstNum - secondNum; break;
        case '*': result = firstNum * secondNum; break;
        case '/': result = firstNum / secondNum; break;
    }
    console.log(result);
}
module.exports = {
    myProg,
    calc
}