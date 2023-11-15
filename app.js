const num = document.getElementById('num')
const btn = document.getElementById('btn')

let cont = 0

num.textContent = cont++

function aumentNum() {

    num.textContent = cont++
    console.log('sdvkcjha')
}

btn.addEventListener("click", aumentNum)

