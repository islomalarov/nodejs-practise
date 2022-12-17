//1
function getAreas(figure, a, b) {
    let s = 0;
    switch (figure) {
        case 'square': s = a ** 2; break;
        case 'rectangle': s = a * b; break;
        case 'circle': s = Math.PI * (a ** 2); break;
    }
    console.log(s);
}


//2
function findSubStr(haystack, needle) {
    let needlePos = haystack.indexOf(needle);
    let msg;

    if (needlePos != -1) {
        msg = `В строке '${haystack}' подстрока '${needle}' начинается с ${needlePos} позиции`;
    } else {
        msg = `В строке '${haystack}' подстрока '${needle}' отсутствует`;
    }
    console.log(msg);
}


//3
function numberCheck(num) {
    let count = 2;
    let numb = '';
    let evenOdd = num % 2 === 0 ? 'четное' : 'нечетное';
    let numberSign = num > 0 ? 'положительное' : 'отрицательное';
    let result;

    while (Math.sqrt(Math.abs(num)) >= count) {
        if (num % count === 0) {
            numb = 'непростое';
        } else {
            numb = 'простое';
        }
        count++;
    }
    result = `Число ${num} ${numb}, ${evenOdd}, ${numberSign}.`;
    console.log(result);
}


module.exports = {
    getAreas,
    findSubStr,
    numberCheck
}