function addName(){
var userName = prompt('What should I call you?');
return '<p>' + 'Hello ' + userName + '!' + '</p>';
}

function dogOwner(){
    var answer = '';
    var message;
     
     while(answer ===  '') {
        answer= prompt('Are you a dog owner?' );
     }
      if (answer === 'yes') {
         message= 'Look for a friend for them!'
     
       } else if (answer === 'no'){
        message= 'look for a new best friend!'
      } else {
          answer= prompt('Are you a dog owner?');
      }


   

       return '<p>' + message + '</p>';
    }

    function timeStamp(){
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
        
            document.write ('<h2>' + greeting + '</h2>');
        }
    

    