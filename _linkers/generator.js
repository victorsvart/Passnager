var result = document.querySelector("#result")
var btn = document.querySelector("#generate")
var array = ["1", "2", "3", "4", "5"]
var passwordLength = 15

btn.onclick = function() {
    var password = ""
    for(let i = 0; i < passwordLength; i++) {
        var random = array[Math.floor(Math.random() * array.length)]
        password = password += random
        result.innerHTML = `${password}`
    }
}