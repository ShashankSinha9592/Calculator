
let buttons = document.querySelectorAll(".buttons")
let mainscreen = document.querySelector(".mainalph")
let prevscreen = document.querySelector(".firstalph")

console.log(mainscreen)

for (let i of buttons) {
        i.addEventListener("click", (e) => {
                let targetn = e.target.innerText

                switch (targetn) {
                        case "AC":
                                mainscreen.innerText = "0"
                                prevscreen.innerText="0"
                                break;
                        case "C":
                                mainscreen.innerText = mainscreen.innerText.slice(0,-1)
                                break;
                                
                                case "=":
                                        prevscreen.innerText = mainscreen.innerText
                                        mainscreen.innerText = eval(mainscreen.innerText)
                                        break;
                                case "%":
                                        prevscreen.innerText = mainscreen.innerText
                                        mainscreen.innerText = eval(mainscreen.innerText)/100
                       
                        default:
                                mainscreen.innerText += targetn
                               break;
                }

        })
}

