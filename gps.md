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
koordinatsystem. Vi ska programmera den att hålla reda på vilket väderstreck den pekar mot
med hjälp av `||specialblock:Specialblock||`. Den ska också programmeras att hela tiden hålla reda på
koordinaterna med variablerna **x** och **y**.

## Lärandemål

- Använda variabler för att lagra robotens position (x och y).
- Uppdatera koordinater utifrån robotens riktning och rörelse.
- Använda villkor för att ändra x och y beroende på väderstreck.
- Programmera roboten att navigera till en bestämd koordinat.
- Förstå sambandet mellan programmering, koordinatsystem och robotens rörelser.

## Begrepp

- [koordinatsystem](#word "Ett rutnät med linjer där man kan visa exakt vart något befinner sig. ")
- [koordinat](#word "En koordinat är en punkt på koordinatsystemets rutnät som anges med två tal, ett på x-axeln som beskriver hur långt en punkt befinner sig till höger eller vänster och ett tal på y-axeln som beksriver hur högt punkten befinner sig uppåt och nedåt. ")
- [x-axel](#word "X-axeln är den vågräta axeln i ett koordinatsystem. Den visar hur långt åt höger eller vänster något finns.")
- [y-axel](#word "Y-axeln är den lodräta axeln i ett koordinatsystem. Den visar hur långt upp eller ner något finns.")
- [variabel](#word "En variabel är en plats i programmet där ett värde kan sparas och ändras.")
- [villkor](#word "Ett villkor är en regel som måste vara sann för att något ska hända. Om något stämmer gör programmet en sak, annars gör den något annat")
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

Startkoden är redan förberedd. Ladda ned befintlig kod och starta finch roboten. Tryck sedan på loggan (se bild när du trycker på lampan) på microbiten och kontrollera att displayen visar x:0 och y:0. "
-  texten som står på slide 8 borde stå på slide 6 också tillsammans med att man ska kontrollera att displayn funkar

![logo](https://raw.githubusercontent.com/markustm86/tutorial/master/images/microbit-logo.png)

## Steg 2 -- Kör framåt

Koda roboten att köra 5 cm framåt i 20% hastighet om man trycker på knapp A "

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

Tryck på loggan.

Vad visar skärmen på microbit?

## Steg 3 -- Uppdatera x när Finch pekar mot öster

Lägg in villkoret `||logic:om sant||` efter att roboten kört 5 cm framåt.

Lägg in specialblocket `||specialblock:pekar mot "Ö" ||` (öster) i "hålet" där det står *sant*

Inne i villkoret **om pekar mot Ö** - skriv att variabeln **x** ska öka med +5, med hjälp  `||variables:ändra x med (  )||` (du kan ändra mellan variablerna *x* och *y* genom klicka på rutan där det står x eller y)

``` blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 5, 20)

    if (specialblock.pekarMot(KoordinatRiktning.Oster)) {
        x += 5
    }
})
```

## Testa

Kör två sträckor genom att trycka på A två gånger (andra gången när roboten stannat)

Vad visar koordinaten nu?

Vad innebär [det?](#word "Det betyder att programmet har uppdaterat Finchs plats på X-axeln.")

Om roboten istället hade kört åt väst (vänster), skulle vi fortfarande addera X med 5?

![+5](https://raw.githubusercontent.com/markustm86/tutorial/master/images/+5.png)

## Steg 4 -- Sväng vänster

Lägg till när B trycks, ska roboten svänga vänster med blocket `||specialblock: Sväng vänster||` (viktigt för att roboten ska hålla reda på i vilken riktning roboten är vänd)

``` blocks
input.onButtonPressed(Button.B, function () {
    specialblock.svangVanster()
})
```

## Steg 5 -- Uppdatera y när Finch pekar mot norr

Nu ska du lägga till ett nytt villkor efter roboten kört framåt 5 cm. Villkoret ska vara: Om roboten pekar mot N (Norr/uppåt), ska **y** ändras med 5. När roboten åker rakt upp/ned, så är ändras ju positionen längs Y-axeln, och inte X-axeln.

![y+5](https://raw.githubusercontent.com/markustm86/tutorial/master/images/y+5.png)
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

Visa koordinaten genom att trycka på loggan.

## Steg 6 -- Uppdatera x när Finch pekar mot väster

Nu ska du lägga till ett tredje villkor, för vad som ska hända när roboten kört 5 cm åt väst (vänster). Ska X öka eller minska då?

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

Till sist ska vi göra ett villkor för om roboten kör åt söder (neråt). Är det X eller Y som ska minska då?

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
