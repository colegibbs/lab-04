let firstName = prompt('What is your name?');
let hobby = prompt('What is your favorite hobby?').toLowerCase().trim();

if(hobby === "jiu jitsu"){
    alert('Cole also likes ' + hobby + '. Read on to learn some more!');
}
else if(hobby === "reading"){
    alert('Cole also likes ' + hobby + '. Read on to learn some more!');
}
else{
    alert('You don\'t have any of the same hobbies as Cole, but you should read on to learn more!');
}

document.write('<h3> It was great to have you ' + firstName + '! </h3>');
document.write('<h3>You could also check out my </h3><a href="https://github.com/colegibbs"><h3>Github</h3></a>');
