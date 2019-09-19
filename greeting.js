var today = new Date();
var hourNow = today.getHours;
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

    document.write ('<h2>' + greeting + '</h2>');
