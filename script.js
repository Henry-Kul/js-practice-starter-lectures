/************************************
 * Variables and data types
 

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var
if = 23; */

/************************************
 * Variables and data types
 

var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/************************************
 * Basic operators
 

var year, yearJohn, yearMark;
var now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
var yearJohn = now - ageJohn;
var yearMark = now - ageMark;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x); */

/************************************
 * Operator precendence
 

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
x++
console.log(x); */

/************************************
 * CODING CHALLENGE 1 *
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables.
2. Calculate both of their BMI's
3. Create a boolean variable containing information about whether Mark has a higher
BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like 'Is Mark's BMI higher than John's? true').
 */

/*var massMark = 80; // kg
var heightMark = 1.8; // meters
var bmiMark = massMark / (heightMark * heightMark);

var massJohn = 95; // kg
var heightJohn = 1.91; // meters
var bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(' Is Mark\'s BMI higher than John\'s? ' + (bmiMark > bmiJohn));
*/

/************************************
 * If / else statements *
 */

/*var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 80; // kg
var heightMark = 1.8; // meters
var bmiMark = massMark / (heightMark * heightMark);

var massJohn = 95; // kg
var heightJohn = 1.91; // meters
var bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}
//console.log(' Is Mark\'s BMI higher than John\'s? ' + (bmiMark > bmiJohn));
*/

/************************************
 * Boolean logic *
 */

/*var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) { //betweem 13 and 20
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
} */

/************************************
 * The Ternary Operator and Switch Statements *
 */

/*var firstName = 'John';
var age = 22;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') :
    console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//if (age >= 18) {
//    var drink = 'beer';
//} else {
//    var drink = 'juice';
//}

// Switch statement
var job = 'cop';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drivers an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
} */

/************************************
 * Truthy and Falsy values and equality operators *
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operators does type coercion!');
} */

/************************************
 * CODING CHALLENGE 2 *
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games,
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
and 123 points.

1. Calculate the average score for each team
2. Decide which team wins in average (highest average score),
and print the winner to the console. Also include the average
score in the output.
3. Then change the scores to show different winners. Don't forget
to take into account there might be a draw (the same average score).

4. EXTRA: Veronica also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && ope
rator to make the decision. If you can't solve this one, just watch the solution,
it's no problem :)
5. Like before, change the scores to generate different winners,
keeping in mind there might be draws.
*/

/*
//John's team scores
var JTGame1 = 89;
var JTGame2 = 120;
var JTGame3 = 103;

var teamJTAverage = (JTGame1 + JTGame2 + JTGame3) / 3;

//Mark's team scores
var MTGame1 = 116;
var MTGame2 = 94;
var MTGame3 = 123;

var teamMTAverage = (MTGame1 + MTGame2 + MTGame3) / 3;

// Veronica's team scores
var VTGame1 = 97;
var VTGame2 = 134;
var VTGame3 = 105;

var teamVTAverage = (VTGame1 + VTGame2 + VTGame3) / 3;

switch (true) {
    case teamJTAverage > teamMTAverage && teamJTAverage > teamVTAverage:
        console.log('John\'s team Wins! ' + teamJTAverage + ' points');
        break;
    case teamMTAverage > teamJTAverage && teamMTAverage > teamVTAverage:
        console.log('Mark\'s team Wins! ' + teamMTAverage + ' points');
        break;
    case teamMTAverage === teamJTAverage && teamMTAverage === teamVTAverage && teamJTAverage === teamVTAverage:
        console.log('Match is a draw!');
        break;
    case teamVTAverage > teamJTAverage && teamVTAverage > teamMTAverage:
        console.log('Veronica\'s team Wins! ' + teamVTAverage + ' points');
        break;
}

*/

/************************************
 * Functions *
 */

/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired');
    }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/************************************
 * Function Statements and Experessions *
 */

// Function declaration
// function whatDoYouDo(job, firstname) {}

// Function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

*/

/************************************
 * Arrays *
 */
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1949);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/************************************
 * CODING CHALLENGE 3 *
 */

/*
John and his family went on a holiday and went to 3
different restaurants. the bills were $124, $48 and
$268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50,
15% when the bill is between $50 and $200, and 10%
if the bill is more than $200.

In the end, John would like to have 2 arrays:
1. Containing all three tips (one for each bill)
2. Containing all three total amounts (bill + tip)
 */
/*
var bill1 = 124;
var bill2 = 48;
var bill3 = 268;

var tipCalculator = function(number) {
    if (number < 50) {
        var tip1 = (number * 0.2);
        return tip1;
    } else if (number => 50 && number < 200) {
        var tip2 = (number * 0.15);
        return tip2;
    } else {
        var tip3 = (number * 0.1);
        return tip3;
    }
}

console.log(tipCalculator(124));
console.log(tipCalculator(48));
console.log(tipCalculator(268));

var tips = [18.60, 9.60, 40.20];

var total = [142.60, 57.60, 308.20];

console.log(total);
*/

/************************************
 * Objects and properties *
 */

/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);


// new Object syntax
var jane = new Object();
jane.firstname = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane);

*/

/************************************
 * Objects and methods *
 */
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/************************************
 * CODING CHALLENGE 4 *
 */

/*
Let's remember the first coding challenge where Mark
and John compared their BMIs. Let's now implement
the same functionality with objects and methods.
1. For each of them, create an object with
properties for their full name, mass, and height
2. Then, add a method to each object to calculate
the BMI. Save the BMI to the object and also return
it from the method.
3. In the end, log to the console who has the
highest BMI, together with the full name and the
respective BMI. Don't forget they might have the same BMI

BMI = mass / (height*height).
Mass in KG and height in Meters
 */
/*
var john = {
    fullName: 'John Markson',
    mass: 75,
    height: 1.78,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

var mark = {
    fullName: 'Mark Johnson',
    mass: 110,
    height: 1.89,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI which is ' + john.BMI);
} else if (mark.BMI > john.BMI) {
    console.log(mark.fullName + ' has a higher BMI which is ' + mark.BMI);
} else {
    console.log('John and Mark have the same BMI which is ' + john.BMI);
};
*/

/************************************
 * Loops and iteration *
 */


/*
// For Loop
for (var i = 0; i <= 10; i += 2) {
    console.log(i);
}


// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// i = 2, 2 < 10 true, log i to console, i++
// i = 3, 3 < 10 true, log i to console, i++
// i = 4, 4 < 10 true, log i to console, i++
// i = 5, 5 < 10 true, log i to console, i++
// i = 6, 6 < 10 true, log i to console, i++
// i = 7, 7 < 10 true, log i to console, i++
// i = 8, 8 < 10 true, log i to console, i++
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 false, exit the loop.

var john = ['John', 'Smith', 1990, 'teacher', false];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/

//continue and break statements

var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}


// Looping backwards

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}