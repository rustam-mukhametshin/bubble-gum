/*
// 1
const arr = [];

for (const str of string) {
    if (str === str.toUpperCase()) {
        arr.push(` ${str}`)
    } else {
        arr.push(str);
    }
}

return arr.join('').trim();*/


// 2
// return [...string].map(str => str === str.toUpperCase() ? ` ${str}` : str).join('').trim();


// 3
// return string.replace(new RegExp(/([a-z])([A-Z])/g), "$1 $2").trim();
