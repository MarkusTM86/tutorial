//% color=#0fbc11 icon="\uf1b9" block="Geometri"
namespace Specialblock {

    //% block="rita liten cirkel"
    export function ritaLitenCirkel() {
        let d = 0
        let rotations = 0

        finch.setMove(MoveDir.Forward, 5, 20)
        finch.setTurn(RLDir.Left, 90, 50)

        d = 3.14159 * 10 * 360 / 180
        rotations = d / (5 * 3.14159)

        finch.resetEncoders()
        finch.startMotors(0, 20)

        while (Math.abs(finch.getEncoder(RLDir.Left) - finch.getEncoder(RLDir.Right)) < rotations) {

        }

        finch.stopMotors()

        finch.setTurn(RLDir.Right, 90, 50)
        finch.setMove(MoveDir.Backward, 5, 20)
    }

    //% block="rita stor cirkel"
    export function ritaStorCirkel() {
        let d = 0
        let rotations = 0

        finch.setMove(MoveDir.Forward, 15.2, 20)
        finch.setTurn(RLDir.Left, 90, 40)

        d = 3.14159 * 10 * 360 / 180
        rotations = d / (5 * 3.14159)

        finch.resetEncoders()
        finch.startMotors(20, 40)

        while (Math.abs(finch.getEncoder(RLDir.Left) - finch.getEncoder(RLDir.Right)) < rotations + 0.0005) {

        }

        finch.stopMotors()

        finch.setTurn(RLDir.Right, 90, 50)
        finch.setMove(MoveDir.Backward, 15.2, 40)
    }
}