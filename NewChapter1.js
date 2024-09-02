// Defining Variables - Variables exist in javascript to store infromation

let laptop = "Asus";
let processor = "intel i7";
let year = 2023;
nextYear = year + 1;

console.log(nextYear, year, processor, laptop); // this is to write everything in one line

console.log(year); // this is to write in vertical format
console.log(nextYear);

let a = 17;
let b = 3;
let answer = a + b;

console.log(answer);

// Introduction to Functions And Callbacks

function triple(number) {
  return number * 3;
}

triple(5);
triple(3); // these are call backs :D

function plusFive(number) {
  return number + 5;
}

let firstNumber = 5;
let secondNumber = 2;

console.log(plusFive(5), plusFive(2));

function divideTwo(number) {
  return number / 2;
}

console.log(divideTwo(5), divideTwo(10));

// Defining Strings & .length

let President = "Emmanuel Macron";
let vicePresident = "Sophie";
President.length;

console.log(President, President.length);
console.log(vicePresident, vicePresident.length);

function getNextCentury(year) {
  console.log(year + 100);
  return year + 100;
}

getNextCentury(2000);
getNextCentury(2500);

// Trying .length in function Upper And LowerCase too

function getStreetlength(BoulevardSeven) {
  return BoulevardSeven.length;
}

console.log(getStreetlength("Amsterdam"));
console.log(getStreetlength("SevenEleven"));

function getUpperCased(Names) {
  return Names.toUpperCase();
}

console.log(getUpperCased("orion"));

function getLowerCased(Named) {
  return Named.toLowerCase();
}

console.log(getLowerCased("NOVA"));

// BOOLEANS :D YAAAAAAY !

let isUserRegistered = true;
console.log(isUserRegistered); // will print true

// Remember === is strictly equal to and !== is the opposite its like not euqal to

function cannotVote(age) {
  return age > 50;
}
console.log(cannotVote(49));
console.log(cannotVote(50));
console.log("A person over the  age 51 cannot vote:", cannotVote(51));
console.log("A person over the  age 52 cannot vote:", cannotVote(52));
console.log("A person over the  age 53 cannot vote:", cannotVote(53));

function isNotEighteen(age) {
  return age !== 18;
}

console.log(isNotEighteen(17));

function scandanavianCountries(country1, country2, country3) {
  console.log(country1, country2);
  console.log(country3);
}

scandanavianCountries("norway", "finland", "sweden");

function switzerlandCapital(city) {
  return city.toUpperCase();
}

console.log(switzerlandCapital("bern"));

function frenchCapital(city) {
  return city.toLowerCase();
}

console.log(frenchCapital("PARIS"));

// If Conditions :D Yaaaaaay ! Please note this is chapter 12 on learn programming.com

function allowedToVote(age) {
  if (age >= 18) {
    return "You Are Allowed To Vote";
  }
}

console.log(allowedToVote(21));

function notAllowedToVote(age) {
  if (age <= 18) {
    return "Dear Love You Are Not Allowed To Vote HAHAHA";
  }
}

console.log(notAllowedToVote(17));

function dontCommitSuicide(love) {
  if (love === true) {
    return "Your Love Is True Please Dont Commit Suicide";
  }
}

console.log(dontCommitSuicide(true));

// Practising Several If Condtions :D yaaaay :D chapter 14

function electionResults(votes) {
  if (votes >= 250.0) {
    return "You Are Eligible To Be Elected As President ";
  }
  if (votes <= 200.0) {
    return "You May Not Be Considered For President But We May Consider Your Application To Beocme A Governor";
  }
}

electionResults(250.0);
electionResults(200.0);

console.log(electionResults(250.0));
console.log(electionResults(200.0));

function becomeVicePresident(totalvotes) {
  if (totalvotes >= 5.0) {
    return "You Are Eligible To Run For Vice Presidents Seat";
  }
  if (totalvotes <= 4.0) {
    return "You Are Not Eligible To Run For The Office";
  }
  if (totalvotes === 4.1) {
    return "Consult Administrator";
  }
}

console.log(becomeVicePresident(5.0));
console.log(becomeVicePresident(4.0));
console.log(becomeVicePresident(4.1));

// .trim() Methods . its similar to .toLowerCase() And .toUpperCase() . trim method is to reve the extra spaces from an email , name etc. ITS USED ON WEBSITES .

let email = "    iamyourdodoo@gmail.com    ";

console.log(email.trim());

function supportsGoogleApp(android) {
  if (android === 18.0) {
    return "You Must Update Your Software";
  }
  if (android === 17.0) {
    return "please download the latest os from android store";
  }
  if (android === 15.0) {
    return "this is funny hahaha";
  }
}

console.log(supportsGoogleApp(18.0));
console.log(supportsGoogleApp(17.0));
console.log(supportsGoogleApp(15.0));

// Chapter 15 Practising Function Bodies

function usersDetails(data) {
  let modified = data;
  modified = modified.toUpperCase();
  modified = modified.trim();
  return modified;
}

console.log(usersDetails("       hello@hotmail.com     "));

function allDetails(infromation) {
  let updatedWay = infromation;
  updatedWay = updatedWay.toUpperCase();
  return updatedWay;
}

console.log(allDetails("location"));
console.log(allDetails("email"));
console.log(allDetails("number"));

function getClearEmail(email) {
  let clearEmail = email;
  clearEmail = clearEmail.toUpperCase();
  clearmail = clearEmail.trim();
  return clearEmail;
}
console.log(getClearEmail("  iamyourdodoo@gmail.com  "));

// Chapter 18 Javascript Naming Convention : Javascript Has A Naming Convention and that is lowerCamelCase !
// Example

let userName = "SIRDODO";
console.log(userName);
console.log(userName.toLowerCase());

// chapter 20 Writing MY OWN FUNCTION !

function welcomeMessage() {
  return "Good Morning , Welcome ";
}

console.log(welcomeMessage());

// undefined chapter 25 learn programming.com undefined is a data type in JavaScript.
// let age and let age = undefined are the same. They both create a variable age, which has the value of undefined.

let name = undefined;

// Practising IF Conditions

function getTourstDetails(users) {
  if (users === 18) {
    return " The individual is allowed to travel ";
  }
  if (users < 18) {
    return "stay at home you are too young";
  }
}

console.log(getTourstDetails(18));
console.log(getTourstDetails(17));

// till here Chapters 25 of learn programming are fully understood and completed :D

// Practising Chapter 26 Implicit Returns (UNDEFINED)

function laptopBrand(name) {
  name.length;
}

console.log(laptopBrand("ASUS"));

function travelCompanion(age) {
  if (age === 18) {
    return "You Are Eligible To Travel As A Companion";
  }
  if (age < 15) {
  } // Since we are missing return here javascript will simply return undefined this is called Implicit Return !
}

console.log(travelCompanion(18));
console.log(travelCompanion(14));

// chapter 27 conditional double call functions which can handle more complex scenarios

function double() {
  console.log("this will double the number");
}

function triple() {
  console.log("this will triple the number");
}

function run(operation) {
  if (operation === "double") {
    return double();
  }
  if (operation === "triple") {
    return triple();
  }
}

console.log(run("double", 500));
// chapter  28 conditional calls functions

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function run(operation, x) {
  if (operation === "double") {
    return double(x);
  }
  if (operation === "triple") {
    return triple(x);
  }
}

console.log(run("double", 50));
console.log(run("triple", 100));

// Chapter 31 Booleans lOgical situations

function getVotingResults(votes) {
  if (votes > 18) {
    return " you are allowed to vote";
  } else {
    return " you are not allowed to vote ";
  }
}

console.log(getVotingResults(20));
console.log(getVotingResults(15));

function sellCows(animals) {
  if (animals < 5) {
    return " dont sell your cows for electricity ";
  } else {
    return "sell them ";
  }
}

console.log(sellCows(4));

// chapter 34 Else And Else If

function getGradesScale(grade) {
  if (grade >= 21) {
    return "A";
  } else if (grade >= 15) {
    return "B";
  } else {
    return "F";
  }
}

console.log(getGradesScale(22));
console.log(getGradesScale(16));
console.log(getGradesScale(5));

// Chapter 37 if without the else keyword :D

function getFrenchVisaEligibilityStatus(history) {
  if (history >= 5) {
    return " you have a good international travel history";
  }
  return " You will not be eligible for a french visa as you have no travel history ";
}

console.log(getFrenchVisaEligibilityStatus(6));
console.log(getFrenchVisaEligibilityStatus(1));
console.log(
  "getFrenchVisaEligibilityStatus(6):",
  getFrenchVisaEligibilityStatus(6)
);

// Chapter 38 booleans shortcuts :D

function canVote(age) {
  return age >= 18;
}

console.log(canVote(20));
console.log(canVote(15));
console.log("canVote(20):", canVote(20));

function getApplicantsAddress(location) {
  if (location === "Europe") {
    return " You May Participate In Climate Conference";
  }
  return " You Cannot Participate";
}

console.log(getApplicantsAddress("Europe"));
console.log(getApplicantsAddress("Asia"));

// Chapter 39 String Concatenation Yaaaaaaaaaay !

let message = "Welcome To The World Of Dorian & Sophie";
console.log(message);

let testingStringConcateNation = "Welcome " + "Sophie";
console.log(testingStringConcateNation);

function testingStringConcate(gluing) {
  return "You are " + gluing + " years old";
}

console.log(testingStringConcate(25));

function greetUser(name) {
  return "Welcome, " + name;
}

console.log(greetUser("Andromede"));
console.log(greetUser("Nova"));
console.log(greetUser("Tora"));
console.log(greetUser("Orion"));

function emailConfirmation(email) {
  return "we just sent an to " + email + " please check your inbox";
}
console.log("email Confirmation;", emailConfirmation("iamyourdodoo@gmail.com"));

function returningFullNames(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log("returningFullNames;", returningFullNames("Dorian", "Daniel"));

// Chapter 40 String Interpolation & Template Strings ( I Miss My Andromede ) Strings defined with backs ticks are called template strings

function showEmailConfirmation(email) {
  return `We just sent an email to ${email}. Please check your inbox.`;
}

console.log(showEmailConfirmation("iamyourdodoo@gmail.com"));

function definingFullName(firstName, lastName) {
  return `${firstName}, ${lastName}`;
}

console.log("defininingFullName:", definingFullName("Dorian", "Daniel"));

// Chapter 41 Arrays & Why Do We need Them !

let inbox = []; // this is example of an empty array

// Chapter 42 Index Arrays & reading arrays values (remember the index starts from 0)

let grades = [1, 2, 3, 4, 5];

let fourthGrade = grades[3];

console.log(grades[3]);

// Chapter 43 Fucntions with array parameters ! How To read iteams from an array !

let temperatures = [0, -1, -5, 7, 9, 10];

let secondTemperatures = temperatures[2];

console.log(temperatures[2]);

function studentGrades(digits) {
  return digits[(0, 2)];
}

console.log(studentGrades([11, 17, 21, 55, 6]));
console.log("studentGrades:", studentGrades([51, 52, 53, 99]));

function gettingFullNames(completename) {
  return `${completename[0]} ${completename[1]} ${completename[2]}`;
}

console.log(gettingFullNames(["Madame", "Le", "Pen"]));

function frenchPresidentDetails(president) {
  return `The Current President Of France Is ${president}`;
}

console.log(
  "frenchPresidentDetails:",
  frenchPresidentDetails("Emmanuel Macron")
);

function describeUsersLocation(user, postcode, country) {
  return ` ${user} is located at ${postcode} ${country}`; // Please dont forget the syntax (you can specify more locations too remmeber using string interpolation)
}

console.log(
  "describingUsersLocation:",
  describeUsersLocation("Dododile", 51050, "Lafrance") // please dont forget the syntax Chapter 43 Last Lesson ! remember to access the first location paramater and the second
);

function comprehensiveUserData(name, [age, gender, membersince]) {
  // REMEMBER [ ] ADD IN CONSOLE.LOG TOO
  return `The current user data ${name} ${age} ${gender} ${membersince}`;
}

console.log(
  "comprehensiveUserData:",
  comprehensiveUserData("DinguDile", [21, "male", 2023]) // REMEMBER TO ADD [ ] AS PER SYNTAX
);

// Chapter 45 Changing or updating array item

let temperature = [41, 52, 61, 23, 11];
temperature[2] = 20;
console.log(temperature[2]);

function fixgrades(gradez) {
  gradez[0] = 7;
  return gradez;
}

console.log(fixgrades([1, 2, 3, 4])); // Attention Syntax

function fixingSecondScore(score) {
  score[2] = 85;
  return score;
}

console.log("fixingSecondScore:", fixingSecondScore([10, 15, 20, 35, 45, 75]));

// Chapter 46 we learned how to access last item of array by array.length -1 only , accessing first item is by [0] and total by arrays.length

// Experiments for Sophie :D

function constructionProjectDetails(architect, [designer, engineer]) {
  return `The following Proeject's ${architect} ${designer} ${engineer} are internationally recoginzed and well respected individuals`;
}

console.log(
  "constructionProjectDetaisl:",
  constructionProjectDetails("Sophie", ["Andromede", "Dododile"])
);

function cyberSecuritySpecialits(Offensive, defensive) {
  return `This Individual ${Offensive} is the best for penetration testing. while this individual ${defensive} is best for protecting system in defence against attacks`;
}

console.log(
  "cyberSecuritySpecialits:",
  cyberSecuritySpecialits("Nova", "Orion")
);

function gettingCompleteName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log("gettingCompleteName:", gettingCompleteName("Dodo", "Dile"));

function everyInformation(name, age, gender, city, country) {
  return `${name} ${name.length} ${age} ${gender} ${city} ${country}`;
}

console.log(
  "everyInformation:",
  everyInformation("Dododile", 21, "Male", "Paris", "Germany")
);

// Chapter 48 Adding New Items into the arrays , We use the Arrays.push() method

function addingNewResults(result) {
  result.push(51);
  return result;
}

console.log("addingNewResults:", addingNewResults([10, 12, 3, 15, 17]));

// Chapter 50 Array.includes() is to check if the array contains the certain item we are looking for ! Array.includes() returns a boolean !

function testingArrayIncludes(including) {
  return including.includes(5);
}

console.log("testingArrayIncludes:", testingArrayIncludes([7, 8, 9, 10]));

// Chapter 51 Array.join() methods converts numbers intro strings and glues what you provide to it in the array.join(glue) . Another definition is that it converts Arrays into Strings
// CSV MEANS COMMA SEPARATED VALUES (", ") ARRAY.JOIN(", ")

function convertToString(grades) {
  return grades.join(";"); // for csv we can grades.join(", ") add anything in between " "
}

// Chapter 54 Array.forEach() Mehtod : So this method is like for writing things vertically iin programming world we call it iterating of array over every array item

// a function without a name is called Anonymous function :D you can drop the name if you want .

// Remember to Shift from Array to Array item but shifting you gear from Plural to Singular as done in the example below ! this is very important .

// Remember the syntax syntax and syntax this is especially for me and myself Mr Dorian Daniel

let vehicles = [5, 6, 7, 8, 9, 10];

vehicles.forEach(function (vehicle) {
  // see this shift
  console.log(vehicle); // the shifting from plural to singular / the shifting from array to array item
});

// Chapter 55 wrapping into functions calculatin sum of array numbers

function gatherAllInformation(informations) {
  let sum = 0;
  informations.forEach(function (information) {
    sum = sum + information;
  });
  return sum;
}

console.log("gatherAllInformations:", gatherAllInformation([200, 300, 400]));

// Chapter 57 Summing arrays with conditions suppose we would like to sum specific numbers in array !

function calculatingSpecificFahrenheits(fahrenheits) {
  let sum = 0;

  fahrenheits.forEach(function (fahrenheit) {
    if (fahrenheit >= 25) sum = sum + fahrenheit;
  });
  return sum;
}

console.log(
  "calculatingSpecificFahrenheits:",
  calculatingSpecificFahrenheits([20, 30, 40]) // so by add an if conditon into the function we just calculated array items which were above 25
);

// Chapter 58 Array.Map Methods :D the purpose of .map() method is to tramsform the existing arrays into new ones .

function increasingEmployees(employes) {
  return employes.map(function (employe) {
    return employe + 2;
  });
}

console.log("increasingEmployees:", increasingEmployees([5, 8, 13, 18]));
console.log("We Have Increased 2 Employees In Every Department"); // << just like here in this example we had 5 8 13 18 and we updated or transformed them into what we wanted by adding 2 to each

function multiplyingStockOutputs(totalstocks) {
  return totalstocks.map(function (totalstock) {
    return totalstock * 2;
  });
}

console.log(
  "We Have Doubled The Stock In SuperMarkets Due to High Demand For Every Item:",
  multiplyingStockOutputs([100, 200, 300, 400, 500])
);

// Chapter 59 Array.reduce() method used to calculate a single value from an array  & converts an array into a single values
// we can calculate or multiply using reducemethod or .forEach method both of them are ok .

// Using .forEach

//let sum = 0
//numbers.forEach(function(number) {
// sum = sum + number
//})

// Using .reduce

// let sum = numbers.reduce(function(total, current) { // the reduce method has reducer which is total and current
//  return total + current
//}, 0) // << 0 is named as initial value to add we use 0 and to multiply we use 1 dont forget this !

// Chapter 61 , Arrays Of Strings :D Pretty Much the same as Array of Numbers ! remmeber same syntaxes and javascript also does not distinguish between them

// Adding New Item Into Array of strings using the push Method

function addBananas(items) {
  items.push("Banana");
  return items;
}

console.log(addBananas(["Milk"]));

// iterating with Arrays.push

let regsiteredUsers = ["dododile", "dingudile", "juniorDile", "seniorDile"];

regsiteredUsers.forEach(function (regsiteredUser) {
  console.log(regsiteredUser);
});

let exGovernors = ["Stevejobs", "PresidentBush", "PresidentObama"];

let lowerCased = exGovernors.map(function (exGovernor) {
  return exGovernor.toLowerCase();
});

console.log(lowerCased);

// .includes Methods returns boolean only

function currentManagers(manager, notmanager) {
  return manager.includes(notmanager);
}

console.log("currentManagers:", currentManagers(["Ali", "Sophia"], "Sophia")); // remember we wrote sophia in the end again to see if she is included as a manager
console.log("currentManagers:", currentManagers(["Khan", "MrRICKY"], "doko")); // now since doko is not including in the list it returns false

// .join method CSV ( csv means comma separated values )

function allPeoples(people) {
  return people.join(", ");
}

console.log("allPeoples:", allPeoples(["Ali", "Andromdede", "belovedDingu"]));

function toUppercased(fullnames) {
  return fullnames.map(function (fullname) {
    // .MAP METHODS
    return fullname.toUpperCase();
  });
}

console.log("toUppercased:", toUppercased(["khan"]));

let strings = ["abc", "def", "ghi", "jkl"];

let chars = strings.map(function (string) {
  return string[0]; // accessing every first alphabet from values
});
console.log(chars);

// Chaining And Without Chaining Mehtods are used to perform multiple operations on a function :D // Please See Chapter 63

// Chapter 64 Strings In Depth strings with doube quoties and single back tick charactes also known as ` template strings . rememebr to add \ before the character !!

let testingMessage = `Welcome To Dodo\'s website`; // REMEMBER THE BACK SLASH \ when using template strings :D
console.log(testingMessage);

let testMessage = `This is Sam's website and it's "awesome"!`;
console.log(testMessage);

let doubleQuote = 'This is "awesome"  !'; // REMMEBER this is how we do with doube quote strings :D
console.log(doubleQuote);

// Chapter 65 Logical And , Logical Or operators

//The logical And operator allows you to chain 2 expressions together and will only return true when both of the expressions evaluate as true.

//   The && operator has one expression on its left and one expression on its right. It only evaluates to true when both expressions are true, so here are all the possible scenarios as well as their result:

//true && true   // true
//true && false  // false
//false && true  // false
//false && false // false

// Logical Or operator ||
//The logical Or operator evaluates to true when at least one of the 2 expressions is true. This means that as long as one of the 2 expressions is true, it will evaluate to true.
//So then there's only one case when it evaluates to false, and that is when both expressions are false.

//true || true   // true
//true || false  // true
//false || true  // true
//false || false // false

// Invert Booleans !

// CHAPTER 66

// the logical  and must satify both the mentioned conditions and the logical or must satify atleast one condition !!

function applyDiscount(age) {
  if (age >= 18 && age >= 50) {
    return " You Will Get A 50% Discount";
  } else {
    return "No Discount";
  }
}

console.log("applyDiscount:", applyDiscount(25)); // We used && operator so the user dosent gets a discount because he is greated than 18 but less than 60
console.log("applyDiscount:", applyDiscount(60)); // this user gets a discount because because he satisfies both the conditions of the and operator !

// Logical Or Operator with advanced if conditions Chapter 66 !

function systemAdministrator(admin, systemcontroller) {
  if (admin === "Admin" || systemcontroller === "True") {
    return "Access Granted";
  } else {
    return "You Do Not Have Access To The Data";
  }
}

console.log("systemAdministrator:", systemAdministrator("Admin", "True"));
console.log("systemAdministrator:", systemAdministrator("GUESTUSER", "false"));
console.log("systemAdminsitrator:", systemAdministrator("Unknown"));

// Logical And Operators && (Remmbember this must satisfy both the conditions)

function experiencedDoctors(experience, surgeriesPerformed) {
  if (experience >= 15 && surgeriesPerformed >= 30) {
    return " You Are Welcome To Join Our Hospital And Become Part Of The Most Experience Doctors In France";
  } else {
    return " You Do Not Hold Enough Experience As Per Our Criteria We No Longer Will Be Considering Your Application";
  }
}

console.log("experiencedDoctors:", experiencedDoctors(15, 31));
console.log("experiencedDoctors:", experiencedDoctors(15, 29));

// Chapter 68 Introduction to objects in javascript !

let individalDetaisl = {
  firstName: "Dodo",
  lastName: "Dile",
  age: 30,
  country: "Europe",
  occupation: "Softare Engineer",
};

console.log("Individual Details:", individalDetaisl);
console.log(individalDetaisl.firstName.toUpperCase());
console.log(individalDetaisl.lastName[0]);
console.log(
  individalDetaisl.occupation[
    individalDetaisl.occupation.length - 1
  ].toUpperCase()
);

// Chapter 69 Working With Objects
function getUsersFullInformation(User) {
  return `${User.firstName.toUpperCase()}  ${User.lastName.toUpperCase()} ${
    User.city
  } ${User.Age} ${User.ID}  `;
}
let user1 = {
  firstName: "Andromede",
  lastName: "Dodo",
  Age: 21,
  location: "France",
  occupation: "Student",
  city: "Paris",
  ID: 2101734200,
};
user1.Age = 25;

let user2 = {
  firstName: "Nova",
  lastName: "Dodo",
  Age: 20,
  location: "Switzerland",
  occupation: "Cat",
  city: "Geneva",
  ID: 7137007,
};

console.log("getUsersFullInformation:", getUsersFullInformation(user1));
console.log("getUsersFullInformation:", getUsersFullInformation(user2));
console.log(user1.ID);
console.log(user2.ID);

// Chapter 70 Nested And Mixed Objects ! in this chapter we learned that objects can have objects too , functions too and methods as well !

let student = {
  firstName: "Dorian",
  lastName: "Daniel",
  location: "Oslo",
  ID: 333777,
  currentCourse: {
    // this is an example of Nested Object which means object inside and object .
    course: "Bachelors Degree",
    year: 2024,
  },
};

console.log(
  "Accessing Student Information:",
  student.firstName,
  student.lastName,
  student.ID,
  student.currentCourse.course
);

// Deeply Nested Objects Examples

let course = {
  name: "Learn Programming",
  instructor: {
    name: {
      first: "Andromede",
      middleName: "Orion",
      last: "Nova",
    },
    isProgrammer: true,
  },
  content: {
    dataTypes: true,
    functions: true,
    classes: true,
    dom: false,
  },
};

console.log(course.instructor.isProgrammer);
console.log(course.content.dataTypes);

// Objects with functions example !

let user = {
  firstName: "Sir Keir Starmer",
  lastName: "Sr.Starmer",
  age: 21,
  canVote: function (age) {
    return age >= 18;
  },
};

console.log(user.canVote(25));
console.log(user.canVote(15));

// Chapter 72 Arrays Of Objects this chapter is pretty much the same as Objects chapter . Arrays contains objects and objects are defined as items

let recipes = [
  {
    title: "Noodles",
    ingredients: ["Water, Seasoning, Chillies"], // this is item one of Array
    timeRequired: 25,
    rating: 3.7,
  },
  {
    title: "Andromede's Delicious Waffles ",
    ingredients: "i dont know ",
    timeRequired: 25,
    rating: 5,
  },
  {
    title: "Momcats Food",
    ingredients: "Boiled Chicken",
    timeRequired: 15,
    rating: 5,
  },
];

recipes.forEach(function (recipe) {
  // check chapter 72 for this conecept .
  console.log(recipe);
});

console.log(recipes[0]);
console.log(recipes[1]);
console.log(recipes[0].ingredients);

// Chapter 74 : CLASSES allows us to groups all the variables , functions together . variables in class are properties . and the functions inside are called methods
// Classes have a very important concept called Instantiation .
// We use UpperCamelCase

class Recipe {}
// this is an empty class

// Chapter 75 Constructor , contructor is a function inside of class ! constructor is automatically called in class

class Items {
  constructor() {}
}

//

class User {
  constructor(firstName, lastName) {
    console.log("creating instance user");
    console.log(firstName);
    console.log(lastName);
  }
}

let sam = new User("Sam", "KhanaKharabDa"); // these are instances
let dingu = new User("Dingu", "theFrog"); // these are instances .

// Another EXAMPLE OF CLASS WITH CONSTRUCTOR PARAMETERS AND MULTIPLE INSTANCES

class FullMeal {
  constructor(mealName, totalCalories) {
    console.log(
      "This Is The Complete Meal And Its Estimated Calories Mentioned"
    );
    console.log(mealName, totalCalories);
  }
}

let meal1 = new FullMeal("French Chicken Sandwich", 800);
let meal2 = new FullMeal(
  "The New Vegetarian Parisian Salad Inspired By DodoDile", // this is class Usage
  300
);

// Chapter 76 Instance Varibles in Constructors (this.)

class School {
  constructor() {
    this.schoolName = "School 42"; // these are  instance variables
    this.location = "Paris";
    this.totalStudents = 125;
  }
}
// this is hardcoded
let school = new School(); // this is class usage

console.log(school); // remmeber to use the class declared variable .

// Assigning INSTANCE Variables to contructor parameters .

class EmployeesData {
  constructor(name, age, status, location) {
    // these are contructor parameters
    // this is intance variable created and assigned to the contructor parameters .
    this.name = name;
    this.age = age;
    this.status = status;
    this.location = location; // anything written with this. is known as instance variable
  }
}

let employeesdatas = new EmployeesData( // this is instance one
  "Dododile",
  25,
  "permanent employee",
  "Paris"
);
let employeesdatas2 = new EmployeesData("Andromede", 5, "permanent", "Paris"); // this is instance 2

// so we have 2 instances , See how the same Class Employees was used for differet instances generating same results with each one having the specified contructor parameters
// That means, they both have this.firstName and this.lastName instance variables, but each one of them has its own values.
//This is why we use classes. It is a factory that creates objects conforming to your specifications.
// notice how all instanee variables are captured along with their parameters in constructor

console.log("Complete Employees Information:", employeesdatas);
console.log("Complete Employees Information:", employeesdatas2);

// Example 2

class TouristsItineraryData {
  constructor(flight, date, destination, nationality) {
    this.flight = flight;
    this.date = date;
    this.destination = destination;
    this.nationality = nationality;
  }
}

let tourist1 = new TouristsItineraryData(
  "Emirates Airlines EK261",
  27 - 12 - 2024,
  "Paris",
  "French"
);
let tourist2 = new TouristsItineraryData(
  "France Airways FFA717",
  10 / 10 / 2024,
  "Oslo",
  "German"
);
let tourist3 = new TouristsItineraryData(
  "Lufthansa Airways 222X",
  11 - 11 - 2024,
  "Berlin",
  "Swiss"
);
let tourist4 = new TouristsItineraryData(
  "Sophie & Dodo Airways",
  1 - 1 - 2025,
  "Geneva",
  "International Citizen"
);
console.log("Tourists Itinerary Data:", tourist1, tourist2);
console.log("Tourists Itinerary Data:", tourist3, tourist4);

// Chapter 77 Instance Methods /  Adding Functions To Instances !

class VehiclesData {
  constructor(make, manufacturer, model) {
    this.make = make;
    this.manufacturer = manufacturer;
    this.model = model;
  }

  fullDetails() {
    return `${this.make} ${this.manufacturer} ${this.model}`; // this is instance method
  }
}

let vehicle1 = new VehiclesData("Camry", "Toyota", 2024);
console.log("VehiclesData:", vehicle1.fullDetails()); // this is implementing instance method !!  So as you can see in the results how Camry Toyota 2024 has been printed .
console.log("VehiclesData:", vehicle1);

// Another Example

class PresidentialElections {
  constructor(name, Age) {
    this.name = name;
    this.Age = Age;
  }
  checkEligibilityOfCandidates() {
    if (this.Age >= 65) {
      return `Dear ${this.name} You Are Eligible To Run For The Elections`;
    } else {
      return `Dear ${this.name} You Are Not Eligible This Time `;
    }
  }
}

let presidentApplicant1 = new PresidentialElections("DodoDile", 60);
let presidentApplicant2 = new PresidentialElections("Andromede", 68);

console.log(
  "President Elections:",
  presidentApplicant1.checkEligibilityOfCandidates()
);
console.log(
  "President Elctions:",
  presidentApplicant2.checkEligibilityOfCandidates()
);

// Chapter 79 Final Chapter Class Inheritances !
