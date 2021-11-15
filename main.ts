let millilitres = 0
let milk = 0
input.onButtonPressed(Button.A, function () {
    millilitres += -1
})
input.onButtonPressed(Button.AB, function () {
    millilitres = 20
    milk = 10
    millilitres = 10
})
input.onButtonPressed(Button.B, function () {
    millilitres += -2
})
input.onGesture(Gesture.Shake, function () {
    millilitres += -5
})
basic.forever(function () {
    let temperature = 0
    if (temperature < 10) {
        basic.showString("you need to add milk")
    }
})
basic.forever(function () {
    if (5 < 0) {
        music.playMelody("C5 B A G F E D C ", 120)
        basic.pause(500)
        basic.showString("Alexa turn on the kettle")
    }
})
basic.forever(function () {
    if (millilitres < 0) {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.showString("the cup is emty")
    }
})
