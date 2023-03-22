let buttons = document.querySelectorAll('.button');
let string = "";

Array.from(buttons).forEach(buttons => {
    buttons.addEventListener('click', (e) => {


        if (e.target.innerHTML == '=') {
            // this is a function to evluate
            string = eval(string);

            document.querySelector('.result').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('.result').value = string;

        }
        else if (e.target.innerHTML == '⌫') {
            var rekerson = document.querySelector('.result').value;
            document.querySelector('.result').value = rekerson.substring(0, rekerson.length - 1);
            string = rekerson.substring(0, rekerson.length - 1);
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('.result').value = string;
        }

    })
})

const ac = document.querySelector('#accept');
ac.addEventListener('click', (e) => {

    if (ac.checked == true) {

        document.body.style.background = "#1f2834";
        document.querySelector('h1').style.color = "white"
    }
    if (ac.checked == false) {
        document.body.style.background = "#c1cdde";
        document.querySelector('h1').style.color = "black"
    }



})

