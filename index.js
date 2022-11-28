// Code your solutions in this file
function writeCards(names, message){
    let messages = [];
    for(let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    }
    return messages;
}

function countDown(n){
    for (let i = n; i > -1; i--){
        console.log(i);
    }
}