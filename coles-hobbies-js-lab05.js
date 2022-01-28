function promptUserForHobby() {
    let confirm = window.confirm('Would you like to learn about Cole\'s hobbies?');
    let hobby = prompt('What is your favorite hobby?')
    console.log("hobby:", hobby);

    if(hobby === null){
        promptUserForHobby();
    }
    else if (hobby === '') {
        promptUserForHobby();
    }
    else if(isNaN(hobby) !== true){
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
    console.log("firstName:", firstName);

    if(firstName === null){
        promptUserForExitMessage();
    }

    let firstNameArr = firstName.split('');
    firstNameArr[0] = firstNameArr[0].toUpperCase();
    firstName = firstNameArr.join('');
    document.write('<h3> It was great to have you ' + firstName + '! </h3>');
    document.write('<h3>You could also check out my </h3><a href ="https://github.com/colegibbs"><h3>Github</h3></a>');
}

function promptForPictures(message) {
    let answer = prompt(message);
    let defaultMessage = 'How awesome is Cole on a scale of 1 to 5?';
    let error = 'Please enter a valid number!';
    if(answer === '') {
        promptForPictures(error + ' ' + defaultMessage);
    }
    let amount = Number(answer);
    if(isNaN(amount)) {
        promptForPictures(error + ' ' + defaultMessage);
    }
    else if(amount < 1 || amount > 5) {
        promptForPictures(error + ' ' + defaultMessage);
    }
    else {
        document.write('<h3>You get ' + amount + " stars for making Cole feel AWESOME!!!");
        for(let i = 0; i < amount - 1; i++) {
            document.write('<img id="star" src="./images/star.jpeg" alt="star">');
        }
    }
}

promptUserForExitMessage();
promptUserForHobby();
let picMessage = 'How awesome is Cole on a scale of 1 to 5?'
promptForPictures(picMessage);
