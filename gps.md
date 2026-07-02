# Finch på koordinatplanet

``` package
finch=github:BirdBrainTechnologies/pxt-finch
specialblock=github:MarkusTM86/tutorial
```

``` template
let x = 0
let y = 0

finch.startFinch()
specialblock.pekaMotOster()

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("x:")
    basic.showNumber(x)
    basic.showString("y:")
    basic.showNumber(y)
})
```

## Kort introduktion

I den här övningen ska du programmera Finch att köra på ett
koordinatsystem. Roboten håller reda på vilket väderstreck den pekar mot
med hjälp av `||specialblock:Specialblock||`. Du ska själv hålla reda på
koordinaterna med variablerna **x** och **y**.

## Lärandemål

-   använda variabler för att lagra koordinater
-   förstå hur koordinater förändras när roboten rör sig
-   använda villkor för att uppdatera x och y
-   koppla robotens rörelse till matematik

## Begrepp

-   koordinatsystem
-   koordinat
-   x-axel
-   y-axel
-   variabel
-   villkor
-   väderstreck

## Material

-   Finch Robot 2.0
-   micro:bit
-   Rutat papper
-   Penna

## Steg 1 -- Titta på startkoden

Startkoden är redan förberedd. Tryck på loggan och kontrollera att
displayen visar **x: 0** och **y: 0**.

## Steg 2 -- Kör framåt

Lägg till `||input:on button A pressed||`.

``` blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 5, 20)
})
```

## Testa

Tryck på A en gång.

Hur långt kör roboten?

Vad visar loggan?

## Steg 3 -- Uppdatera x när Finch pekar mot öster

Använd `||logic:if||` tillsammans med `||specialblock:pekar mot||`.

``` blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 5, 20)

    if (specialblock.pekarMot(KoordinatRiktning.Oster)) {
        x += 5
    }
})
```

## Testa

Kör två steg.

Vad visar koordinaten nu?

## Steg 4 -- Sväng vänster

Lägg till `||input:on button B pressed||`.

``` blocks
input.onButtonPressed(Button.B, function () {
    specialblock.svangVanster()
})
```

## Steg 5 -- Uppdatera y när Finch pekar mot norr

``` blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 5, 20)

    if (specialblock.pekarMot(KoordinatRiktning.Oster)) {
        x += 5
    }

    if (specialblock.pekarMot(KoordinatRiktning.Norr)) {
        y += 5
    }
})
```

## Testa

Kör:

-   A
-   A
-   B
-   A
-   A

Visa koordinaten med loggan.

## Steg 6 -- Uppdatera x när Finch pekar mot väster

``` blocks
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
})
```

## Steg 7 -- Uppdatera y när Finch pekar mot söder

``` blocks
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
```

## Avslutande test

Kör Finch till koordinaten **(15,10)**.

Rita banan på ett koordinatpapper.

## Avslutande diskussion

-   Varför ändrar vi koordinaterna med **5**?
-   Hur vet programmet vilket väderstreck roboten pekar mot?
-   Kan flera olika vägar leda till samma koordinat?

## Bonus -- Så här kan du utmana dig

Programmera Finch att köra till valfri koordinat som en klasskamrat
väljer.
