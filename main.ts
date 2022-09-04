input.onButtonPressed(Button.A, function () {
    if (true) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.South)
    }
})
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
basic.forever(function () {
	
})
