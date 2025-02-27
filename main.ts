input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.setGroup(13)
    radio.sendString("halo")
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0x007fff)
    basic.showString("Hallo ich bin die Jope", 90)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    for (let index = 0; index < 4; index++) {
        music.playMelody("C G C5 G C C C5 G ", 200)
        music.playMelody("E B C5 A B G A F ", 200)
        music.playMelody("G B A G C5 B A B ", 200)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    led.setBrightness(1000)
    basic.setLedColor(0xffffff)
    for (let index = 0; index < 4; index++) {
        motors.dualMotorPower(Motor.M0_M1, 50)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        music.playMelody("C G C5 G C C C5 G ", 200)
        music.playMelody("E B C5 A B G A F ", 200)
        music.playMelody("G B A G C5 B A B ", 200)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        music.playMelody("C G C5 G C C C5 G ", 200)
        music.playMelody("E B C5 A B G A F ", 200)
        music.playMelody("G B A G C5 B A B ", 200)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Messi ist der GOAT", 90)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    for (let index = 0; index < 4; index++) {
        basic.setLedColor(0xff0000)
        basic.pause(100)
        basic.setLedColor(0xff8000)
        basic.pause(100)
        basic.setLedColor(0xffff00)
        basic.pause(100)
        basic.setLedColor(0xff9da5)
        basic.pause(100)
        basic.setLedColor(0x00ff00)
        basic.pause(100)
        basic.setLedColor(0xb09eff)
        basic.pause(100)
        basic.setLedColor(0x00ffff)
        basic.pause(100)
        basic.setLedColor(0x007fff)
        basic.pause(100)
        basic.setLedColor(0x65471f)
        basic.pause(100)
        basic.setLedColor(0x0000ff)
        basic.pause(100)
        basic.setLedColor(0x7f00ff)
        basic.pause(100)
        basic.setLedColor(0xff0080)
        basic.pause(100)
        basic.setLedColor(0xff00ff)
        basic.pause(100)
        basic.setLedColor(0xffffff)
        basic.pause(100)
        basic.setLedColor(0x999999)
        basic.pause(100)
        basic.setLedColor(0x000000)
        basic.pause(100)
    }
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    for (let index = 0; index < 20; index++) {
        basic.setLedColor(0xff0000)
        basic.pause(100)
        basic.setLedColor(0xffff00)
        basic.pause(100)
        basic.setLedColor(0x00ff00)
        basic.pause(100)
        basic.setLedColor(0x00ffff)
        basic.pause(100)
        basic.setLedColor(0x0000ff)
        basic.pause(100)
        basic.setLedColor(0xff0080)
        basic.pause(100)
    }
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    for (let index = 0; index < 10; index++) {
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 10)
    }
})
