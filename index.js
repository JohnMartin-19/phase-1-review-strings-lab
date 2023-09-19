// Write your code in this file!
const currentUser = 'John';
const welcomeMessage = 'Welcome to Flatbook,' + currentUser + '!';
excitedWelcomeMessage = welcomeMessage.toUpperCase();

console.log(welcomeMessage);
console.log(excitedWelcomeMessage);


upperCurrentUser = currentUser.toUpperCase();

newExcited = excitedWelcomeMessage.slice(-1);
console.log(newExcited);

function shrtGreeting(){
    const firstInitial = currentUser[0];
    //const restOfName = currentUser.slice(1);
    console.log('Hello,' + firstInitial+newExcited);
    
}
shrtGreeting();