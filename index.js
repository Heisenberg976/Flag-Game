const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const ten = document.getElementById('ten');
const eleven = document.getElementById('eleven');
const twelve = document.getElementById('twelve');
const thirteen = document.getElementById('thirteen');
const fourteen = document.getElementById('fourteen');
const fifteen = document.getElementById('fifteen');
const sixteen = document.getElementById('sixteen');
const scores = document.getElementById('score');
const show = document.getElementById('show');
const user = document.getElementById('user');
let buttons = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen];

let board;
let array = new Array;
array.push("images/argentina.png", "images/brazil.png", "images/china.png", "images/france.png", "images/georgia.png");
array.push("images/germany.png", "images/united-kingdom.png", "images/united-states.png")

let tries = 0;
let moves = 0;
let left = 0;
let c1 = 0;
let c2 = 0;
let c1Name = '';
let c2Name = '';
let score = 0;

function setUp() {

    function check(btn) {
        btn.innerHTML = '<img src="images/icon.png" alt=""></img>';
    }

    for (let i = 0; i < buttons.length; i++) {
        // setTimeout(check(buttons[i]), 2000);

        check(buttons[i]);

        // console.log("akvar");
    }
}
function remBtn(btn) {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id == btn) {
            buttons.splice(i, 1);
            // console.log("wavshale");
        }

    }
}

function newGame() {
    board = [
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1]
    ];
    let i = 0;
    let n = 8;
    while (i < n) {
        let j = 0;
        while (j < 2) {
            let a = Math.floor(Math.random() * 100) % 4;
            let b = Math.floor(Math.random() * 100) % 4;
            if (board[a][b] == -1) {
                board[a][b] = array[i];
                j++
            }
        }
        i++;
    }
}

function startGame() {

    function click(btn) {
        tries++;
        console.log(tries);
        moves++;
        // console.log(moves);
        if (moves == 1) {
            c1 = btn.innerHTML;
            c1Name = btn;
            btn.style.pointerEvents = 'none';

            // console.log(c1);
        }
        else if (moves == 2) {
            c2 = btn.innerHTML;
            c2Name = btn;
            // console.log(' clickity2');
            if (c1 === c2) {
                score += 5;
                scores.innerText = 'Score:' + ' ' + score;

                remBtn(c1Name.id);
                remBtn(c2Name.id);
                c1Name.style.pointerEvents = 'none';
                c2Name.style.pointerEvents = 'none';
                setUp();
                moves = 0;
                c1 = 0;
                c2 = 0;
                moves = 0;
            }
            else {
                c1Name.style.pointerEvents = 'auto';
                c1 = 0;
                c2 = 0;
                moves = 0;
                score--;
                scores.innerText = 'Score:' + ' ' + score;;

                setTimeout(function () { setUp(); }, 500);

                // setUp();
            }
        }

        if (buttons.length == 0) {
            win();
        }
    }

    one.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[0][0]}" alt=""></img>`;
        click(one);
    })

    two.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[0][1]}" alt=""></img>`;
        click(two);

    })

    three.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[0][2]}" alt=""></img>`;
        click(three);

    })

    four.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[0][3]}" alt=""></img>`;
        click(four);

    })

    five.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[1][0]}" alt=""></img>`;
        click(five);

    })
    six.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[1][1]}" alt=""></img>`;
        click(six);

    })
    seven.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[1][2]}" alt=""></img>`;
        click(seven);

    })
    eight.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[1][3]}" alt=""></img>`;
        click(eight);

    })
    nine.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[2][0]}" alt=""></img>`;
        click(nine);

    })
    ten.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[2][1]}" alt=""></img>`;
        click(ten);

    }) 
    eleven.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[2][2]}" alt=""></img>`;
        click(eleven);

    })
    twelve.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[2][3]}" alt=""></img>`;
        click(twelve);

    })

    thirteen.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[3][0]}" alt=""></img>`;
        click(thirteen);

    })
    fourteen.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[3][1]}" alt=""></img>`;
        click(fourteen);

    })
    fifteen.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[3][2]}" alt=""></img>`;
        click(fifteen);

    })

    sixteen.addEventListener('click', function () {
        this.innerHTML = `<img src="${board[3][3]}" alt=""></img>`;
        click(sixteen);

    })

}
function win() {
    const result = document.getElementById('result');
    result.innerHTML = `
    You Won!
    <br>
    Score:${score}/40
    `;
    const http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // window.location.href = "index.php";
            console.log(this.response);
        }
    }
    http.open("POST", 'db/add.php', true);
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http.send(`user=${user.value}&try=${tries}&button=1`);

}

show.addEventListener('click', function () {
    one.innerHTML = `<img src="${board[0][0]}" alt=""></img>`;
    two.innerHTML = `<img src="${board[0][1]}" alt=""></img>`;
    three.innerHTML = `<img src="${board[0][2]}" alt=""></img>`;
    four.innerHTML = `<img src="${board[0][3]}" alt=""></img>`;
    five.innerHTML = `<img src="${board[1][0]}" alt=""></img>`;
    six.innerHTML = `<img src="${board[1][1]}" alt=""></img>`;
    seven.innerHTML = `<img src="${board[1][2]}" alt=""></img>`;
    eight.innerHTML = `<img src="${board[1][3]}" alt=""></img>`;
    nine.innerHTML = `<img src="${board[2][0]}" alt=""></img>`;
    ten.innerHTML = `<img src="${board[2][1]}" alt=""></img>`;
    eleven.innerHTML = `<img src="${board[2][2]}" alt=""></img>`;
    twelve.innerHTML = `<img src="${board[2][3]}" alt=""></img>`;
    thirteen.innerHTML = `<img src="${board[3][0]}" alt=""></img>`;
    fourteen.innerHTML = `<img src="${board[3][1]}" alt=""></img>`;
    fifteen.innerHTML = `<img src="${board[3][2]}" alt=""></img>`;
    sixteen.innerHTML = `<img src="${board[3][3]}" alt=""></img>`;
})
// 
startGame();
setUp();
newGame();
