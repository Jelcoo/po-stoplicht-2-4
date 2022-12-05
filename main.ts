radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        radionummer += 1
    }
    if (2 == radionummer) {
        doeIets()
        radionummer = 0
    }
})
function doeIets () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    timerEindTijd = input.runningTime() + 10000
    if (input.runningTime() >= timerEindTijd) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        timerEindTijd = input.runningTime() + 3000
        if (input.runningTime() >= timerEindTijd) {
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            timerEindTijd = input.runningTime() + 3000
            if (input.runningTime() >= timerEindTijd) {
                radio.sendNumber(2)
            }
        }
    }
}
input.onButtonPressed(Button.A, function () {
    doeIets()
})
let timerEindTijd = 0
let radionummer = 0
radio.setGroup(177)
pins.digitalWritePin(DigitalPin.P0, 1)
basic.forever(function () {
	
})
