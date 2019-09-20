function addName() {
    var userName = prompt('What should I call you?');
    return '<p>' + 'Hello ' + userName + '!' + '</p>';
}

function dogOwner() {
    var answer = '';
    var message;

    while (answer === '') {
        answer = prompt('Are you a dog owner?');
    }
    if (answer === 'yes') {
        message = 'Look for a friend for them!'

    } else if (answer === 'no') {
        message = 'look for a new best friend!'
    } else {
        answer = prompt('Are you a dog owner?');
    }

    return '<p>' + message + '</p>';
}

function timeStamp() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'We hope you are having a good night! ';
    } else if (hourNow > 12) {
        greeting = 'Perfect time to look at some dogs! ';
    } else if (hourNow > 0) {
        greeting = 'Early to the game! ';
    } else {
        greeting = 'Welcome!';
    }

    document.write('<h2>' + greeting + '</h2>');
}

function pawPrints() {
    var rating = prompt('How much do you like pups out of 100??');
    var print;

    while (rating === '' || isNaN(rating)) {
        count = prompt('How much do you like pups out of 100??');
    }
    
    return Number(rating);
}
function picture(){
    var rating = pawPrints();
if (rating > 0) {
    item = '<img src="SavedPictures/pawprint.png">';
}
return item;
}

function showPrints() {
    var item = picture();
    var total = pawPrints();
    var result = '';

    for (var i = 0; i < total; i++) {
        var realCount = i
        result = result + '<p>'+ realCount + item + '</p>';
    }

    return result;

}




