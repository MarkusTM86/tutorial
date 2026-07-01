/**
 * Geometri för Finch
 */

//% color=#0fbc11 icon="\uf1b9" block="Geometri"
namespace geometri {

    //% block="rita liten cirkel"
    export function ritaLitenCirkel() {
        ritaCirkel(10, 10, 30)
    }

    //% block="rita stor cirkel"
    export function ritaStorCirkel() {
        ritaCirkel(20, 20, 30)
    }

    function ritaCirkel(radius: number, leftSpeed: number, rightSpeed: number) {

        finch.setMove(MoveDir.Forward, radius, 20)
        finch.setTurn(RLDir.Left, 90, 50)

        let d = 3.14159 * 10 * 360 / 180
        let rotations = d / (5 * 3.14159)

        finch.resetEncoders()
        finch.startMotors(leftSpeed, rightSpeed)

        while (Math.abs(finch.getEncoder(RLDir.Left) - finch.getEncoder(RLDir.Right)) < rotations * 1.08) {

        }

        finch.stopMotors()

        finch.setTurn(RLDir.Right, 90, 50)
        finch.setMove(MoveDir.Backward, radius, 20)
    }
}
