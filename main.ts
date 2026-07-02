input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("x:")
    basic.showNumber(x)
    basic.showString("y:")
    basic.showNumber(y)
    specialblock.korHem(x, y)
})
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 5, 20)
    if (specialblock.pekarMot(KoordinatRiktning.Oster)) {
        x += 5
    }
    if (specialblock.pekarMot(KoordinatRiktning.Norr)) {
        y += 5
    }
    if (specialblock.pekarMot(KoordinatRiktning.Vaster)) {
        x += -5
    }
    if (specialblock.pekarMot(KoordinatRiktning.Soder)) {
        y += -5
    }
})
input.onButtonPressed(Button.B, function () {
    specialblock.svangVanster()
})
let y = 0
let x = 0
finch.startFinch()
specialblock.pekaMotOster()
