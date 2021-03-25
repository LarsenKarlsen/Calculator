let num = ''
let exp =[]

const calculate = () => {
    exp.push(num)
    switch (exp[exp.length - 2]){
        case '+':
            num = Number(exp[exp.length - 3]) + Number(exp[exp.length - 1])
            break
        case '-':
            num = Number(exp[exp.length - 3]) - Number(exp[exp.length - 1])
            break
        case 'x':
            num = Number(exp[exp.length - 3]) * Number(exp[exp.length - 1])
            break
        case '÷':
            num = Number(exp[exp.length - 3]) / Number(exp[exp.length - 1])
            break
    }
    screen.innerHTML = num
}

let allNums = document.querySelectorAll('.number');
let screen = document.querySelector('.screen')

allNums.forEach((button)=>{
    button.addEventListener('click', ()=>{
        if (typeof num === 'number'){
            num = ''
        }
        num += button.innerHTML
        console.log(num)
        screen.innerHTML = num
    })
})

let operButtons = document.querySelectorAll(".operator")
operButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        exp.push(num)
        exp.push(button.innerHTML)
        num = ''
        screen.innerHTML = num
        console.log(exp)
    })
})

let clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', ()=>{
    num=''
    exp=[]
    screen.innerHTML = num
})

let evalButton = document.querySelector('.eval')
evalButton.addEventListener('click', calculate)