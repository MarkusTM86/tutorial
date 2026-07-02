# Finch på koordinatplanet

```package
finch=github:BirdBrainTechnologies/pxt-finch
tutorial=github:MarkusTM86/tutorial
```

## Kort introduktion

I den här övningen ska du programmera Finch att köra på ett koordinatsystem.

Roboten kommer att hålla reda på vilket väderstreck den pekar mot, men **du** ska själv hålla reda på koordinaterna med hjälp av variablerna **x** och **y**.

Målet är att förstå hur programmering kan användas för att beskriva rörelser i ett koordinatsystem.

---

## Lärandemål

Efter övningen ska du kunna:

- använda variabler för att lagra koordinater
- förstå hur ett koordinatsystem fungerar
- använda villkor för att uppdatera en position
- koppla robotens rörelser till matematik

---

## Begrepp

### Programmering

- variabel
- villkor
- algoritm

### Matematik

- koordinatsystem
- koordinat
- x-axel
- y-axel
- väderstreck

---

## Material

- Finch Robot 2.0
- micro:bit
- Rutat papper
- Penna

---

## Steg 1 – Starta Finch

Starta Finch.

```blocks
finch.startFinch()
```

---

## Steg 2 – Nollställ riktningen

Roboten börjar med att peka mot öster.

```blocks
specialblock.pekaMotOster()
```

---

## Steg 3 – Skapa variabler

Skapa två variabler.

- x
- y

```blocks
let x = 0
let y = 0
```

---

## Steg 4 – Startposition

Låt roboten börja i origo.

```blocks
x = 0
y = 0
```

---

## Testa @unplugged

Vilken koordinat har roboten nu?

---

## Steg 5 – Kör framåt

När knapp A trycks ska roboten köra ett steg framåt.

```blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 10, 20)
})
```

---

## Steg 6 – Om roboten pekar mot öster

Om roboten pekar mot öster ska x öka.

```blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 10, 20)

    if (specialblock.pekarMot(KoordinatRiktning.Oster)) {
        x += 1
    }
})
```

---

## Testa

Tryck på A tre gånger.

Vilket värde har x?

Vilket värde har y?

---

## Steg 7 – Sväng vänster

Knapp B ska svänga roboten.

```blocks
input.onButtonPressed(Button.B, function () {
    specialblock.svangVanster()
})
```

---

## Steg 8 – Om roboten pekar mot norr

Nu ska y öka när roboten kör framåt.

```blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 10, 20)

    if (specialblock.pekarMot(KoordinatRiktning.Oster)) {
        x += 1
    }

    if (specialblock.pekarMot(KoordinatRiktning.Norr)) {
        y += 1
    }
})
```

---

## Testa

Kör följande bana.

- Framåt
- Framåt
- Sväng vänster
- Framåt
- Framåt

Vilken koordinat hamnar roboten på?

---

## Steg 9 – Lägg till väster

När roboten pekar mot väster ska x minska.

```blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 10, 20)

    if (specialblock.pekarMot(KoordinatRiktning.Oster)) {
        x += 1
    }

    if (specialblock.pekarMot(KoordinatRiktning.Norr)) {
        y += 1
    }

    if (specialblock.pekarMot(KoordinatRiktning.Vaster)) {
        x += -1
    }
})
```

---

## Steg 10 – Lägg till söder

När roboten pekar mot söder ska y minska.

```blocks
input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 10, 20)

    if (specialblock.pekarMot(KoordinatRiktning.Oster)) {
        x += 1
    }

    if (specialblock.pekarMot(KoordinatRiktning.Norr)) {
        y += 1
    }

    if (specialblock.pekarMot(KoordinatRiktning.Vaster)) {
        x += -1
    }

    if (specialblock.pekarMot(KoordinatRiktning.Soder)) {
        y += -1
    }
})
```

---

## Steg 11 – Visa koordinaterna

Visa först x och sedan y.

```blocks
basic.showNumber(x)
basic.pause(500)
basic.showNumber(y)
```

---

## Testa

Försök köra roboten till koordinaten

**(3,2)**

Kontrollera att variablerna visar rätt värden.

---

## Avslutande test

Kan du köra roboten till

- (2,1)
- (4,0)
- (1,3)

Rita samtidigt robotens väg på ett koordinatpapper.

---

## Avslutande diskussion

- Hur visste programmet vilket håll roboten pekade åt?
- Varför behövde du själv uppdatera x och y?
- Vad skulle hända om du glömde att ändra en variabel?
- Kan flera olika vägar leda till samma koordinat?

---

## Uppföljning av lärandemålen

Nu har du tränat på att:

- använda variabler
- använda villkor
- beskriva en rörelse med koordinater
- koppla programmering till matematik

---

## Bonus – Så här kan du utmana dig

Kan du programmera roboten att köra en kvadrat?

Kan du köra till koordinaten (4,4) och tillbaka till (0,0)?

Kan du låta en klasskamrat ge dig en koordinat som roboten ska hitta till?
````
