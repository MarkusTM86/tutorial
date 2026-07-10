enum KoordinatRiktning {
    //% block="Ö"
    Oster = 0,
    //% block="N"
    Norr = 1,
    //% block="V"
    Vaster = 2,
    //% block="S"
    Soder = 3
}

//% color="#0fbc11" icon="\uf1b9" block="Specialblock"
//% groups=['Koordinater', 'Geometri', 'other']
namespace specialblock {

    // Håller reda på vilket väderstreck Finch pekar mot.
    let riktning = KoordinatRiktning.Oster
    let svangHastighet = 20

    //==================================================
    // GEOMETRI
    //==================================================

    //% group="Geometri"
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

    //% group="Geometri"
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

    //==================================================
    // KOORDINATER
    //==================================================

    //% group="Koordinater"
    //% block="peka mot öster"
    export function pekaMotOster() {
        riktning = KoordinatRiktning.Oster
    }

    //% group="Koordinater"
    //% block="sväng vänster"
    export function svangVanster() {
        finch.setTurn(RLDir.Left, 90, svangHastighet)

        if (riktning == KoordinatRiktning.Oster) {
            riktning = KoordinatRiktning.Norr
        } else if (riktning == KoordinatRiktning.Norr) {
            riktning = KoordinatRiktning.Vaster
        } else if (riktning == KoordinatRiktning.Vaster) {
            riktning = KoordinatRiktning.Soder
        } else {
            riktning = KoordinatRiktning.Oster
        }
    }

    //% group="Koordinater"
    //% block="sväng höger"
    export function svangHoger() {
        finch.setTurn(RLDir.Right, 90, svangHastighet)

        if (riktning == KoordinatRiktning.Oster) {
            riktning = KoordinatRiktning.Soder
        } else if (riktning == KoordinatRiktning.Soder) {
            riktning = KoordinatRiktning.Vaster
        } else if (riktning == KoordinatRiktning.Vaster) {
            riktning = KoordinatRiktning.Norr
        } else {
            riktning = KoordinatRiktning.Oster
        }
    }

    //% group="Koordinater"
    //% block="pekar mot %riktning"
    export function pekarMot(riktningAttJamfora: KoordinatRiktning): boolean {
        return riktning == riktningAttJamfora
    }

    // Intern hjälpfunktion - visas inte som block
    function vridTillRiktning(nyRiktning: KoordinatRiktning) {
        while (riktning != nyRiktning) {
            svangVanster()
        }
    }

    //% group="Koordinater"
    //% block="kör hem från x %x y %y"
    //% x.defl=0
    //% y.defl=0
    export function korHem(x: number, y: number) {

        // Kör hem i x-led
        if (x > 0) {
            vridTillRiktning(KoordinatRiktning.Vaster)
            finch.setMove(MoveDir.Forward, x, 20)
        } else if (x < 0) {
            vridTillRiktning(KoordinatRiktning.Oster)
            finch.setMove(MoveDir.Forward, Math.abs(x), 20)
        }

        // Kör hem i y-led
        if (y > 0) {
            vridTillRiktning(KoordinatRiktning.Soder)
            finch.setMove(MoveDir.Forward, y, 20)
        } else if (y < 0) {
            vridTillRiktning(KoordinatRiktning.Norr)
            finch.setMove(MoveDir.Forward, Math.abs(y), 20)
        }

        // Avsluta med att peka mot öster
        vridTillRiktning(KoordinatRiktning.Oster)

    }
}