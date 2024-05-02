const age = 25;
const year = 2019;

console.log("I am",age,"years old")

const name = 'mario';
constlikes = '10';

let result = `${name} is ${age} years old `
console.log(result);

let martial_artists = ['chun-li', 'goku', 'vegeta'];
console.log(martial_artists)

const ul = document.querySelector('.people')

const people = ['mario', 'princess peach', 'donkey kong', 'chun li', 'wario'];

let html = ``;

people.forEach(function(person){

    html += `<li style="color: purple">${person}</li>`;

})

console.log(html);
ul.innerHTML = html
