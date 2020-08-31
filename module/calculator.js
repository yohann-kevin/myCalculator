var btns = document.getElementsByTagName("button");
var calc = document.getElementById("calc");

export function calculator() {
    for (var thisBtn of btns) {
        thisBtn.addEventListener('click', function () {
            if (this.innerHTML == "=")
                calc.value = eval(calc.value);
            else if (this.innerHTML == "C")
                calc.value = "";
            else
                calc.value += this.innerHTML;
        })
    }
}
// test webhooks