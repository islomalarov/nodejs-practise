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



//4
function myProg() {
    console.log(`*****************************
    *                 Моя программа            *
    *****************************`);
}

module.exports = {
    getAreas,
    findSubStr,
    myProg
}