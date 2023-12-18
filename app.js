
let counter = 0
let hr = 0
let min = 0
let sec = 0
let timer = false

function start() {
    timer = true
    stopWatch()
}
function stop() {
    timer = false
}
function reset() {
    timer = false

    counter = 0
    hr = 0
    min = 0
    sec = 0

    document.getElementById("hr").innerHTML = '0:'
    document.getElementById("min").innerHTML = '0:'
    document.getElementById("sec").innerHTML = '0:'
    document.getElementById("counter").innerHTML = '0'
  
}

function stopWatch() {
    if (timer == true) {

        counter = counter + 1

        if (counter == 100) {

            sec = sec + 1
            counter = 0
        }
        if (sec == 60) {
            min = min + 1
            sec = 0
        }
        if (min == 60) {
            hr = hr + 1
            sec = 0
        }
    
        document.getElementById("hr").innerHTML = hr+":"
        document.getElementById("min").innerHTML = min+":"
        document.getElementById("sec").innerHTML = sec+":"
        document.getElementById("counter").innerHTML = counter
        setTimeout('stopWatch()', 10)
    }
}
