# Finch på koordinatplanet – Håll reda på robotens position

```package
finch=github:BirdBrainTechnologies/pxt-finch
```

## Kort introduktion

I den här övningen ska du programmera Finch att köra på ett koordinatsystem. Roboten vet inte själv var den befinner sig, därför ska du använda variablerna **x** och **y** för att hålla reda på positionen.

Du kommer också att använda en variabel som beskriver vilken riktning roboten pekar åt.

---

## Lärandemål

Efter övningen ska du kunna:

- använda variabler för att spara en position
- förstå hur koordinater beskriver en plats
- använda programmering för att modellera ett koordinatsystem
- använda villkor för att uppdatera koordinater
- testa och förbättra ett program

---

## Begrepp

### Programmering

- variabel
- villkor
- algoritm
- sekvens

### Matematik

- koordinatsystem
- x-axel
- y-axel
- koordinat
- riktning

---

## Material

- Finch Robot 2.0
- micro:bit
- USB-kabel
- Rutat papper
- Penna

---

## Steg 1 – Starta Finch

Lägg till blocket som startar Finch.

```blocks
finch.startFinch()
```

---

## Steg 2 – Skapa variabler

Skapa tre variabler:

- x
- y
- riktning

```blocks
let x = 0
let y = 0
let riktning = 0
```

---

## Steg 3 – Ge startvärden

Låt roboten börja i koordinaten (0,0).

Riktning 0 betyder att Finch pekar åt öster.

```blocks
x = 0
y = 0
riktning = 0
```

---

## Testa @unplugged

Var står roboten nu?

Vilken riktning pekar den åt?

---

## Steg 4 – Kör framåt

När knapp A trycks ska Finch köra ett steg framåt.

```blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 10, 10)
})
```

---

## Steg 5 – Uppdatera x

Eftersom roboten kör österut ska x öka med 1.

```blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 10, 10)
    x += 1
})
```

---

## Steg 6 – Visa x

Visa den nya positionen.

```blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 10, 10)
    x += 1
    basic.showNumber(x)
})
```

---

## Testa @unplugged

Tryck flera gånger på A.

Hur förändras x?

Hur förändras y?

---

## Steg 7 – Sväng vänster

Knapp B ska vrida roboten 90° åt vänster.

```blocks
input.onButtonPressed(Button.B, function () {
    finch.setTurn(RLDir.Left, 90, 10)
})
```

---

## Steg 8 – Ändra riktning

När roboten svänger ska variabeln **riktning** öka.

```blocks
input.onButtonPressed(Button.B, function () {
    finch.setTurn(RLDir.Left, 90, 10)
    riktning += 1
})
```

---

## Steg 9 – Börja om efter fyra svängar

Efter fyra vänstersvängar pekar roboten åt samma håll igen.

```blocks
input.onButtonPressed(Button.B, function () {
    finch.setTurn(RLDir.Left, 90, 10)
    riktning += 1
    if (riktning > 3) {
        riktning = 0
    }
})
```

---

## Testa @unplugged

Tryck fyra gånger på B.

Vilket värde har variabeln **riktning**?

---

## Steg 10 – Flytta beroende på riktning

Nu ska koordinaterna ändras beroende på vilken riktning roboten pekar åt.

```blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 10, 10)

    if (riktning == 0) {
        x += 1
    } else if (riktning == 1) {
        y += 1
    } else if (riktning == 2) {
        x += -1
    } else {
        y += -1
    }
})
```

---

## Steg 11 – Visa koordinaterna

Visa först x och sedan y.

```blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 10, 10)

    if (riktning == 0) {
        x += 1
    } else if (riktning == 1) {
        y += 1
    } else if (riktning == 2) {
        x += -1
    } else {
        y += -1
    }

    basic.showNumber(x)
    basic.pause(500)
    basic.showNumber(y)
})
```

---

## Testa @unplugged

Kör följande bana.

- Framåt
- Framåt
- Sväng vänster
- Framåt
- Framåt

Vilken koordinat hamnar roboten på?

Rita samma bana på ett koordinatsystem.

---

## Steg 12 – Återställ positionen

Knapp A+B ska flytta tillbaka den virtuella positionen till origo.

```blocks
input.onButtonPressed(Button.AB, function () {
    x = 0
    y = 0
    riktning = 0
    basic.showIcon(IconNames.Happy)
})
```

---

## Avslutande test

Försök att köra Finch till koordinaten:

**(3,2)**

Blev robotens sparade koordinater rätt?

Rita banan på ett koordinatpapper.

---

## Avslutande diskussion @unplugged

Diskutera tillsammans.

- Vet roboten egentligen var den är?
- Varför behöver vi variablerna x och y?
- Vad händer om variablerna inte uppdateras?
- Hur hänger detta ihop med koordinatsystem i matematiken?
- Kan flera olika vägar leda till samma koordinat?

---

## Uppföljning av lärandemålen

Nu har du tränat på att:

- använda variabler
- förstå koordinater
- uppdatera en position med programmering
- använda villkor
- testa och förbättra ett program

---

## Bonus – Så här kan du utmana dig

Kan du programmera Finch så att den kör till en valfri koordinat, till exempel:

- (4,1)
- (2,3)
- (0,0)

Kan du skapa en skattjakt där klasskamraterna bara får koordinaterna som ledtråd?

Kan du rita en kvadrat eller en bokstav på koordinatplanet?
````
