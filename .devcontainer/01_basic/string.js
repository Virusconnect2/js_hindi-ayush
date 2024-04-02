const name = "ayush"

console.log(name.charAt(2));
console.log(name.indexOf('s'));

const newstring = name.substring(0, 4)
console.log(newstring);

const anotherstring = name.slice(-4, 3)
console.log(anotherstring);

const newstringone = "  ayush  "
console.log(newstringone);

console.log(newstringone.trim());


const url = "https://ayush.com/ayush20%vashistha"
console.log(url.includes('ayush'));