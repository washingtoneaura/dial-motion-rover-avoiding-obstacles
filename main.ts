input.onButtonPressed(Button.A, function () {
    isMoving = 1
    hummingbird.setRotationServo(FourPort.One, 40)
    hummingbird.setRotationServo(FourPort.Two, -40)
})
input.onButtonPressed(Button.B, function () {
    isMoving = 0
    hummingbird.setRotationServo(FourPort.One, 0)
    hummingbird.setRotationServo(FourPort.Two, 0)
})
let isMoving = 0
hummingbird.startHummingbird()
basic.forever(function () {
    if (isMoving == 1) {
        if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 15) {
            hummingbird.setTriLED(
            TwoPort.One,
            100,
            0,
            0
            )
            hummingbird.setRotationServo(FourPort.One, 0)
            hummingbird.setRotationServo(FourPort.Two, 0)
        } else {
            hummingbird.setTriLED(
            TwoPort.One,
            0,
            100,
            0
            )
            hummingbird.setRotationServo(FourPort.One, 40)
            hummingbird.setRotationServo(FourPort.Two, -40)
        }
        if (hummingbird.getSensor(SensorType.Dial, ThreePort.Two) > 80) {
            hummingbird.setTriLED(
            TwoPort.One,
            70,
            70,
            0
            )
            hummingbird.setRotationServo(FourPort.One, 40)
            hummingbird.setRotationServo(FourPort.Two, 0)
            basic.showNumber(hummingbird.getSensor(SensorType.Dial, ThreePort.Two))
        }
        if (hummingbird.getSensor(SensorType.Dial, ThreePort.Two) < 20) {
            hummingbird.setTriLED(
            TwoPort.One,
            70,
            70,
            0
            )
            hummingbird.setRotationServo(FourPort.One, 0)
            hummingbird.setRotationServo(FourPort.Two, -40)
            basic.showNumber(hummingbird.getSensor(SensorType.Dial, ThreePort.Two))
        }
    }
})
