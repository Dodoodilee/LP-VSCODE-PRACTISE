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

// chapter 27 conditional double call

function triple() {
  console.log("This Will Triple");
}
function funnyCall(genuine) {
  if (genuine === true) {
    return triple();
  }
}

console.log(triple());
