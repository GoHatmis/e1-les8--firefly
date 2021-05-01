radio.onReceivedNumber(function (receivedNumber) {
    periode += 1
})
radio.setTransmitPower(1)
radio.setGroup(12)
let periode = 0
basic.pause(randint(50, 500))
basic.forever(function () {
    if (periode >= 0) {
        radio.sendNumber(0)
        game.addScore(1)
        periode = 0
    } else {
        periode += 1
    }
    basic.pause(1000)
})
