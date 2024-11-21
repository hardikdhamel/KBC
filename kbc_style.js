let money = 0;
let currentQuestion = 1;

const questions = [
        {
            question: "Which year is leap-year?",
            options: ["2022", "2024", "2026", "2028"],
            answer: "2024"
        },
        {
            question: "How often do leap years happen?",
            options: ["every 2 years", "every 3 years", "every 4 years", "every 5 years"],
            answer: "every 4 years"
        },
        {
            question: "Who have Won Most ICC trophies as Captain in cricket History?",
            options: ["Ricky Ponting", "Mithali Raj", "M S Dhoni", "Meg Lanning"],
            answer: "Meg Lanning"
        },
        {
            question: "Which company acquired a 26% stake in Adani's power project?",
            options: ["Reliance", "Tata", "Infosys", "Wipro"],
            answer: "Reliance"
        },
        {
            question: "Who has the most followers on Instagram in India?",
            options: ["Priyanka Chopra", "Narendra Modi", "Virat Kohli", "Shraddha Kapoor"],
            answer: "Virat Kohli"
        },
        {
            question: "When did Modi declare Rs. 500 & 2000 notes invalid?",
            options: ["2nd December", "8th November", "15th October", "12th January"],
            answer: "8th November"
        },
        {
            question: "Which country was first to land on lunar south pole?",
            options: ["USA", "India", "Russia", "Japan"],
            answer: "India"
        },
        {
            question: "Which movie won the best Feature Film award at the 69th National Film Awards in 2023?",
            options: ["Rocketry: The Nambi Effect", "RRR", "Jawan", "Pathan"],
            answer: "Rocketry: The Nambi Effect"
        },
        {
            question: "Who is the first cricketer to score two T20 international fifties on same day?",
            options: ["Mohammad Hafeez", "Mohammad Shahzad", "Virat Kohli", "Shakib Al Hasan"],
            answer: "Mohammad Shahzad"
        },
        {
            question: "Who is poised to become Ireland's youngest prime minister at the age of 37?",
            options: ["Leo Varadkar", "Simon Harris", "Micheal Martin", "Mary Lou McDonald"],
            answer: "Simon Harris"
        },
        {
            question: "Who has been appointed as the new Chief Minister of Haryana?",
            options: ["Nayab Singh Saini", "Manohar Lal Khattar", "Mool Chand Sharma", "Banwari Lal"],
            answer: "Nayab Singh Saini"
        },
        {
            question: "Which country is Amul set to launch its fresh milk products in for the first time?",
            options: ["UAE", "United States", "United Kingdom", "Canada"],
            answer: "United States"
        }
];

function display_Question() {
    document.querySelector('.question').textContent = `${questions[currentQuestion - 1].question}`;
    const options = document.querySelector('.options');
    options.innerHTML = '';
    questions[currentQuestion - 1].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.onclick = () => check_Answer(option);
        options.appendChild(button);
    });
}

function check_Answer(selectedAnswer) {
    const correctAnswer = questions[currentQuestion - 1].answer;
    if (selectedAnswer === correctAnswer){ 
        currentQuestion++;
        prize_Money();
        if (currentQuestion <= questions.length) {
            display_Question();
        }
        else {
            document.write("Excellent! <br>")
            document.write("You are won : "+money+" rs.")
        }
    } else {
        document.write("Sorry, Your Game is over! <br>")
        document.write("You are won : "+money+" rs.")
    }
}

function _50_50() {
    const options = questions[currentQuestion - 1].options;
    const correctAnswer = questions[currentQuestion - 1].answer;
    const incorrectOptions = options.filter(option => option !== correctAnswer);
    const randomIndex1 = Math.floor(Math.random() * incorrectOptions.length);
    let randomIndex2 = Math.floor(Math.random() * incorrectOptions.length);
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * incorrectOptions.length);
    }
    
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(button => {
        if (button.textContent.includes(incorrectOptions[randomIndex1]) || button.textContent.includes(incorrectOptions[randomIndex2])) {
            button.style.display='none';
        }
    });
    
    document.querySelector('.lifelines button:nth-child(1)').disabled = true;
    document.querySelector('.lifelines button:nth-child(1)').style.backgroundColor='red';
}

function phone_Friend() {
    const correctAnswer = questions[currentQuestion - 1].answer;
    alert(`Your friend says the answer is: ${correctAnswer}`);
    document.querySelector('.lifelines button:nth-child(2)').disabled = true;
    document.querySelector('.lifelines button:nth-child(2)').style.backgroundColor='red';
}

function skip_Question() {
    currentQuestion++;
    display_Question();
    document.querySelector('.lifelines button:nth-child(3)').disabled = true;
    document.querySelector('.lifelines button:nth-child(3)').style.backgroundColor = 'red';
}

function prize_Money(){
    if(currentQuestion - 1 == 1){
        document.getElementById('a').style.backgroundColor = 'green';
        money = 10000;
    }

    else if(currentQuestion - 1 == 2){
        document.getElementById('b').style.backgroundColor = 'green';
        money = 20000;
    }

    else if(currentQuestion - 1  == 3){
        document.getElementById('c').style.backgroundColor = 'green';
        money = 50000;
    }

    else if(currentQuestion - 1  == 4){
        document.getElementById('d').style.backgroundColor = 'green';
        money = 120000;
    }

    else if(currentQuestion - 1  == 5){
        document.getElementById('e').style.backgroundColor = 'red';
        money = 240000;
    }

    else if(currentQuestion - 1  == 6){
        document.getElementById('f').style.backgroundColor = 'red';
        money = 320000;
    }

    else if(currentQuestion - 1  == 7){
        document.getElementById('g').style.backgroundColor = 'red';
        money = 640000;
    }

    else if(currentQuestion - 1  == 8){
        document.getElementById('h').style.backgroundColor = 'red';
        money = 1250000;
    }

    else if(currentQuestion - 1  == 9){
        document.getElementById('i').style.backgroundColor = 'purple';
        money = 2500000;
    }

    else if(currentQuestion - 1  == 10){
        document.getElementById('j').style.backgroundColor = 'purple';
        money = 5000000;
    }

    else if(currentQuestion - 1  == 11){
        document.getElementById('k').style.backgroundColor = 'purple';
        money = 10000000;
    }

    else{
        document.getElementById('l').style.backgroundColor = 'purple';
        money = 70000000;
    }
};

display_Question();