function makePerson(name, age) {
    let personObj = {
        name: name,
        age: age,
        talk() { console.log(`${this.name} You can talk!`) }
    }
    return personObj;
}

let per1 = makePerson("amar", '20');
let per2 = makePerson("amardeep", '20');

console.log(per1);
console.log(per2);

per1.talk();
per2.talk();

