// ToDo
/*
Task 1
Import array with users (from user1.json file) and write a function that will check if the phone number for every single user contains only digits
Result:
- if the phone number contains only digits then log true in the console
- if the phone number does not contain only digits then log which user's phone number is not correct e.g. "Phone number of user with ID 2 is not correct"

Task 2
Import array with users (from user1.json file) and users (from user2.js file) and compare them
Result:
- if the first email address of users1 is the same as the first email address of users2 (users1.users[1].emailAddress === users2.users[1].emailAddress) then do not log anything
- if the first email address of users1 is not the same as the first email address of users2 then log in the console e.g. "Email addresses of user with ID 1 are not the same. First email is: racks.jacson@test.tt; but second email is: racks.jecson@test.tt".

Compare email addresses, first names, last names and phone numbers.
*/

console.log("Task 1");

var importedFile = require('C:\\Users\\gmala\\js-task\\users1.json');

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function checkDigit(arg) {
	arg.users.forEach(function(user){
    if (isNumeric(user.phoneNumber)) {
    	console.log(true)
    } else if (!isNumeric(user.phoneNumber)){
    	console.log(`phone number of user with ${user.userId} is not correct`)
    }
  })
}

checkDigit(importedFile)

console.log("Task 2");

var importedFile2 = require('C:\\Users\\gmala\\js-task\\users2.js');

function checkEmailAddress(arg1, arg2) {
	arg1.users.forEach(function(user, i){
	if (importedFile.users[i].emailAddress === importedFile2.users[i].emailAddress) {
		return;
	}
	else console.log(`Email addresses of user with ID ${user.userId} are not the same. First email is: ${user.emailAddress}; but second email is: ${importedFile2.users[i].emailAddress}`)
	})
}
	
checkEmailAddress(importedFile,importedFile2)
	
function checkFirstNames(arg1, arg2) {
	arg1.users.forEach(function(user, i){
	if (importedFile.users[i].firstName === importedFile2.users[i].firstName) {
		return;
	}
	else console.log(`First name of user with ID ${user.userId} are not the same. First name is: ${user.firstName}; but second name is: ${importedFile2.users[i].firstName}`)
	})
}	

checkFirstNames(importedFile,importedFile2)

function checkLastNames(arg1, arg2) {
	arg1.users.forEach(function(user, i){
	if (importedFile.users[i].lastName === importedFile2.users[i].lastName) {
		return;
	}
	else console.log(`Last name of user with ID ${user.userId} are not the same. Last name is: ${user.lastName}; but second last name is: ${importedFile2.users[i].lastName}`)
	})
}	

checkLastNames(importedFile,importedFile2)

function checkPhoneNumbers(arg1, arg2) {
	arg1.users.forEach(function(user, i){
	if (importedFile.users[i].phoneNumber === importedFile2.users[i].phoneNumber) {
		return;
	}
	else console.log(`Phone number of user with ID ${user.userId} are not the same. Phone number is: ${user.phoneNumber}; but second phone number is: ${importedFile2.users[i].phoneNumber}`)
	})
}	

checkPhoneNumbers(importedFile,importedFile2)
