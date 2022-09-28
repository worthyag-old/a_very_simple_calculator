let btn = document.querySelectorAll(".btn");
let display = document.querySelector(".current-operand");
let ac = document.querySelector(".all-clear");
let equal = document.querySelector(".equals");
let answer = document.querySelector(".previous-operand");

let showCalc = "";

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', handleClick = () => {
        console.log("Btn clicked.");

        if (btn[i] == ac) {
            console.log("AC Btn clicked.")
            showCalc = "";
        };
        if ((btn[i] != ac) && (btn[i] != equal) && (btn[i].innerText != '%')) {
            showCalc += btn[i].innerText
        }

        if (btn[i] == equal) {
            console.log("Equals btn clicked.")
            console.log(showCalc)
            answer.innerText = eval(showCalc);
            showCalc = "";
        }

        if (btn[i].innerText === "%") {
            showCalc += '*0.01'
            // console.log(math.eval('50%'))
        }

        display.innerText = showCalc;
    })
}

