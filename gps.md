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
med hjälp av `||specialblock:Specialblock||`. Den ska själv hålla reda på
koordinaterna med variablerna **x** och **y**.

## Lärandemål

-   använda variabler för att sparaa koordinater
-   förstå hur koordinater förändras när roboten rör sig
-   använda villkor för att uppdatera x och y
-   koppla robotens rörelse till matematik

## Begrepp

- [koordinatsystem](#word "Ett koordinatsystem hjälper oss att beskriva en plats med hjälp av två axlar och koordinater.")
- [koordinat](#word "En koordinat är ett läge som anges med två tal, ett på x-axeln och ett på y-axeln.")
- [x-axel](#word "X-axeln är den vågräta axeln i ett koordinatsystem. Den visar hur långt åt höger eller vänster något finns.")
- [y-axel](#word "Y-axeln är den lodräta axeln i ett koordinatsystem. Den visar hur långt upp eller ner något finns.")
- [variabel](#word "En variabel är en plats i programmet där ett värde kan sparas och ändras.")
- [villkor](#word "Ett villkor hjälper programmet att fatta beslut. Om något stämmer gör det en sak, annars gör det något annat.")
- [väderstreck](#word "Väderstreck används för att beskriva riktningar, till exempel norr, söder, öster och väster.")

## Material

-   Finch Robot 2.0
-   micro:bit
-   Ett koordinatsystem eller ett papper/whiteboardblad att rita koordinatsystem på
-   Penna
-   USB-sladd


## Koordinatsystem @unplugged

Till denna övning behöver du ett koordinatsystem. Om du inte redan ritat ett, gör det nu. Märk var 5:e cm (2 rutor på whiteboardpappret = 5 cm). Glöm inte att märka ut 0 (origo)

![Koordinatsystem](https://raw.githubusercontent.com/markustm86/tutorial/master/images/koordinatsystem.png)

## Steg 1 -- Titta på startkoden

Startkoden är redan förberedd. Tryck på loggan och kontrollera att
displayen visar **x: 0** och **y: 0**.

## Steg 2 -- Kör framåt

Koda att roboten ska köra framåt 5 cm i 20% hastighet. 

``` blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 5, 20)
})
```

## Testa

Placera roboten på origo (i mitten av korset), vänd åt öster (höger)

![origo](https://raw.githubusercontent.com/markustm86/tutorial/master/images/origo.png)

Tryck på A en gång.

Hur långt kör roboten?

Vad visar loggan?

## Steg 3 -- Uppdatera x när Finch pekar mot öster

Använd villkoret `||logic:om||` tillsammans med `||specialblock:pekar mot "Ö" ||` efter att roboten kört 5 cm framåt, och lägg där att `||variables:variabel X||` ska ändras med 5  

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

Lägg till när B trycks, ska roboten svänga vänster med blocket `||specialblock: Sväng vänster||` (viktigt för att roboten ska hålla reda på i vilken riktning roboten är vänd)

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

Om du vill kan du stoppa en penna i roboten och låta den rita banan på koordinatsystemet.

## Bonus: Låt roboten hitta hem självkörande

I `||specialblock||` finns blocket **kör hem**  

```blocks
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("x:")
    basic.showNumber(x)
    basic.showString("y:")
    basic.showNumber(y)
    specialblock.korHem(x, y)
    y = 0
    x = 0
})
```


## Avslutande diskussion

-   Varför ändrar vi koordinaterna med **5**?
-   Hur vet programmet vilket väderstreck roboten pekar mot?
-   Kan flera olika vägar leda till samma koordinat?

## Bonus -- Så här kan du utmana dig

Programmera Finch att köra till valfri koordinat som en klasskamrat
väljer.
