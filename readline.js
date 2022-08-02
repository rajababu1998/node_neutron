const readline = require('readline');

// process: is the global object of Node.
const read1 = readline.createInterface({input: process.stdin, output: process.stdout});

// read1.question(`Enter your name:`,(userInput) => {
//     console.log('user has entered the name',userInput);
//     // read1.close();
// })


let num1 = 5;
let num2 = 6;
let conunt = 0;

read1.question(`\n Enter the sum of ${num1} and ${num2} \n`,(userInput) => {
    console.log('sum entered by user - ',userInput);
    if(userInput == num1 + num2) {
        console.log('Your answer is correct.');
        read1.close();
    }
    else {
        read1.setPrompt('\n Your answer is incorrect plz enter again');  // to display
        read1.prompt();  // now it is going to wait for the answer.
        conunt = conunt + 1;
        read1.on('line',(userInput) => {
            if(userInput == num1 + num2) {
                console.log(`Your answer is correct in attempts - ${conunt + 1} \n`);
                read1.close();
            }
            else {
                if(conunt > 5) {
                    console.log('You have excedded the max attempts');
                    read1.close();
                }
                conunt = conunt + 1;
                read1.setPrompt('\n Your answer is incorrect plz enter again');  // to display
                read1.prompt();
            }
        })
    }
})

read1.on('close', () => {
    console.log('\n You have reached next level');
})