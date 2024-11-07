def on_button_pressed_a():
    global isMoving
    isMoving = 1
    hummingbird.set_rotation_servo(FourPort.ONE, 66)
    hummingbird.set_rotation_servo(FourPort.TWO, -66)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global isMoving
    isMoving = 0
    hummingbird.set_rotation_servo(FourPort.ONE, 0)
    hummingbird.set_rotation_servo(FourPort.TWO, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

isMoving = 0
hummingbird.start_hummingbird()

def on_forever():
    if isMoving == 1:
        if hummingbird.get_sensor(SensorType.DISTANCE, ThreePort.ONE) < 15:
            hummingbird.set_tri_led(TwoPort.ONE, 100, 0, 0)
            hummingbird.set_rotation_servo(FourPort.ONE, 0)
            hummingbird.set_rotation_servo(FourPort.TWO, 0)
        else:
            hummingbird.set_tri_led(TwoPort.ONE, 0, 100, 0)
            hummingbird.set_rotation_servo(FourPort.ONE, 66)
            hummingbird.set_rotation_servo(FourPort.TWO, -66)
basic.forever(on_forever)
