import { month, description, name, User, multiply } from './export-arr-const-let.js';
// import { sayHi, sayBy } from './apart-export.js'
import * as say from './apart-export.js';
import Student from './default-export.js';


//Export-arr-const-let.js

// console.log(month);
// console.log(description);
// console.log(name)

// const user1 = new User('Arham Apel', 453, 'Student');
// console.log(user1);

// console.log(multiply(4, 10));




//apart-Export.js

say.sayHi('Arham Apel');
say.sayBy('Arham Apel');



//Export-default.js

const student1 = new Student('Arham Apel', 564, 'Computer'); 
console.log(student1);

const student2 = new Student('Shayra', 563, 'Math');
console.log(student2)