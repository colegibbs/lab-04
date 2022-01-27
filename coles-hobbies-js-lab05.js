function promptUserForHobby() {
    let confirm = window.confirm('Would you like to learn about Cole\'s hobbies?');
    let hobby = prompt('What is your favorite hobby?').toLowerCase().trim();

    if(isNaN(hobby) !== true){
        let numberErrorMessage = "Please type in your favorite hobby. Not a number!";
        alert(numberErrorMessage);
        promptUserForHobby();
    }

    if(confirm){
        if(hobby === "jiu jitsu"){
          alert('Cole also likes ' + hobby + '. Read on to learn some more!');
        }
        else if(hobby === "reading"){
            alert('Cole also likes ' + hobby + '. Read on to learn some more!');
        }
        else{
           alert('You don\'t have any of the same hobbies as Cole, but you should read on to learn more!');
        }
    }
    else{
        alert('THEN BE GONE!');
    }
}

function promptUserForExitMessage() {
    let firstName = prompt('What is your name?');
    let firstNameArr = firstName.split('');
    firstNameArr[0] = firstNameArr[0].toUpperCase();
    firstName = firstNameArr.join('');
    document.write('<h3> It was great to have you ' + firstName + '! </h3>');
    document.write('<h3>You could also check out my </h3><a href ="https://github.com/colegibbs"><h3>Github</h3></a>');
}

promptUserForExitMessage();
promptUserForHobby();

//let firstName = prompt('What is your name?');
//let hobby = prompt('What is your favorite hobby?').toLowerCase().trim();
//let confirm = window.confirm('Would you like to learn about Cole\'s hobbies?');

//if(confirm){
//    if(hobby === "jiu jitsu"){
 //     alert('Cole also likes ' + hobby + '. Read on to learn some more!');
 //   }
//    else if(hobby === "reading"){
//        alert('Cole also likes ' + hobby + '. Read on to learn some more!');
//    }
//    else{
//       alert('You don\'t have any of the same hobbies as Cole, but you should read on to learn more!');
//    }
///}
//else{
//    alert('THEN BE GONE!');
//}

//document.write('<h3> It was great to have you ' + firstName + '! </h3>');
//document.write('<h3>You could also check out my </h3><a href ="https://github.com/colegibbs"><h3>Github</h3></a>');
