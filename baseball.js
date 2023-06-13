// 컴퓨터는 0과 9 사이의 서로 다른 숫자 3개를 무작위로 뽑습니다. (ex) 123, 759
// 사용자는 컴퓨터가 뽑은 숫자를 맞추기 위해 시도합니다.
// 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.
// 숫자의 값과 위치가 모두 일치하면 S
// 숫자의 값은 일치하지만 위치가 틀렸으면 B
// 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.
// 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다.

// 랜덤숫자 받기
function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function generateUniqueNumbers() {
    const numbers = [];

    while (numbers.length < 3) {
        const randomNumber = generateRandomNumber();

        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }

    return numbers.join('');
}

const randomNumbers = generateUniqueNumbers();
console.log('무작위로 선택된 숫자:', randomNumbers);
// ------------

// 입력받기
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let count = 0;

function restartgame() {
    rl.question('수자를 입력하세요: ', (answer) => {
        let userNumbers = answer;

        let s = 0;
        let b = 0;


        for (let i = 0; i < 3; i++) {
            if (userNumbers[i] === randomNumbers[i]) {
                console.log(userNumbers[i])
                console.log(randomNumbers[i])
                s++;
            } else if (randomNumbers.includes(userNumbers[i])) {
                b++;
            }
        }

        count++

        console.log(`${count}번째 시도: ${userNumbers}`);
        console.log(`${b}B${s}S`);

        if (s === 3) {
            console.log(`${count}번째 시도: ${userNumbers}`);
            console.log(`${b}B${s}S`);
            console.log(`${count}번만에 맞히셨습니다`)
            console.log('게임을 종료합니다')
            rl.close();
        } else {
            restartgame()
        }
    });
}
restartgame();






