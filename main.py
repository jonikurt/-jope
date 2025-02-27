def on_pin_touch_p1():
    basic.set_led_color(0xffffff)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
input.on_pin_touch_event(TouchPin.P1, input.button_event_down(), on_pin_touch_p1)

def on_button_a():
    basic.set_led_color(0x007fff)
    basic.show_string("Hallo ich bin die Jope", 90)
    basic.show_leds("""
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        """)
    basic.show_leds("""
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        """)
    for index in range(4):
        music.play_melody("C G C5 G C C C5 G ", 200)
        music.play_melody("E B C5 A B G A F ", 200)
        music.play_melody("G B A G C5 B A B ", 200)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_ab():
    led.set_brightness(1000)
    basic.set_led_color(0xffffff)
    for index2 in range(4):
        motors.dual_motor_power(Motor.M0_M1, 50)
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

def on_button_b():
    for index3 in range(4):
        basic.show_leds("""
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            """)
        music.play_melody("C G C5 G C C C5 G ", 200)
        music.play_melody("E B C5 A B G A F ", 200)
        music.play_melody("G B A G C5 B A B ", 200)
        basic.show_leds("""
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            """)
        music.play_melody("C G C5 G C C C5 G ", 200)
        music.play_melody("E B C5 A B G A F ", 200)
        music.play_melody("G B A G C5 B A B ", 200)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def on_gesture_shake():
    basic.show_string("Messi ist der GOAT", 90)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_pin_touch_p0():
    for index4 in range(4):
        basic.set_led_color(0xff0000)
        basic.pause(100)
        basic.set_led_color(0xff8000)
        basic.pause(100)
        basic.set_led_color(0xffff00)
        basic.pause(100)
        basic.set_led_color(0xff9da5)
        basic.pause(100)
        basic.set_led_color(0x00ff00)
        basic.pause(100)
        basic.set_led_color(0xb09eff)
        basic.pause(100)
        basic.set_led_color(0x00ffff)
        basic.pause(100)
        basic.set_led_color(0x007fff)
        basic.pause(100)
        basic.set_led_color(0x65471f)
        basic.pause(100)
        basic.set_led_color(0x0000ff)
        basic.pause(100)
        basic.set_led_color(0x7f00ff)
        basic.pause(100)
        basic.set_led_color(0xff0080)
        basic.pause(100)
        basic.set_led_color(0xff00ff)
        basic.pause(100)
        basic.set_led_color(0xffffff)
        basic.pause(100)
        basic.set_led_color(0x999999)
        basic.pause(100)
        basic.set_led_color(0x000000)
        basic.pause(100)
input.on_pin_touch_event(TouchPin.P0, input.button_event_down(), on_pin_touch_p0)

def on_pin_touch_p3():
    for index5 in range(10):
        music.play_melody("C5 C5 C5 C5 C5 C5 C5 C5 ", 10)
input.on_pin_touch_event(TouchPin.P3, input.button_event_down(), on_pin_touch_p3)
