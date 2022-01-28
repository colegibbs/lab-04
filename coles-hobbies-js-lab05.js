function promptUserForHobby() {
    let confirm = window.confirm('Would you like to learn about Cole\'s hobbies?');
    let hobby = prompt('What is your favorite hobby?').toLowerCase().trim();
    console.log("hobby:", hobby);
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

function promptForPictures() {
    let picAmount = prompt('How awesome is Cole on a scale of 1 to 5?');
    let defaultMessage = 'How awesome is Cole on a scale of 1 to 5?';
    let error = 'Please enter a number!';
    if(picAmount === '') {
        promptForPictures(error + ' ' + defaultMessage);
    }
    let picAmount = Number(picAmount);
    if(isNaN(picAmount)){
        promptForPictures(error + ' ' + defaultMessage);
    }
    else {
        for(let i = 0; i < picAmount - 1; i++) {
            document.write('<img src="star.jpeg">');
        }
    }
}

promptUserForExitMessage();
promptUserForHobby();
let picMessage = 'How awesome is Cole on a scale of 1 to 5?'
promptForPictures();
